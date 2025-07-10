const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// AI Content Generation Endpoint
app.post('/api/generate', async (req, res) => {
  try {
    const { type, context, tone } = req.body;

    if (!context || !type || !tone) {
      return res.status(400).json({ 
        error: 'Missing required fields: type, context, and tone' 
      });
    }

    // Create prompt based on type
    let systemPrompt = '';
    let userPrompt = '';

    switch (type) {
      case 'email':
        systemPrompt = `You are a professional email writing assistant. Write a ${tone} email based on the user's requirements. Make it concise, clear, and appropriate for the given context.`;
        userPrompt = `Write a ${tone} email with the following context: ${context}`;
        break;
      
      case 'social':
        systemPrompt = `You are a social media content creator. Write an engaging ${tone} social media post based on the user's requirements. Make it attention-grabbing and shareable.`;
        userPrompt = `Write a ${tone} social media post with the following context: ${context}`;
        break;
      
      case 'blog':
        systemPrompt = `You are a content strategist. Create a detailed blog post outline based on the user's requirements. Include main sections, key points, and a compelling introduction.`;
        userPrompt = `Create a blog post outline with the following context: ${context}`;
        break;
      
      default:
        return res.status(400).json({ error: 'Invalid content type' });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const generatedContent = completion.choices[0].message.content;

    res.json({ 
      success: true, 
      content: generatedContent,
      type: type,
      tone: tone
    });

  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ 
      error: 'Failed to generate content. Please try again.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'AI Writing Assistant is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 AI Writing Assistant server running on port ${PORT}`);
  console.log(`📝 Visit http://localhost:${PORT} to use the app`);
  
  if (!process.env.OPENAI_API_KEY) {
    console.warn('⚠️  Warning: OPENAI_API_KEY not found in environment variables');
    console.warn('   Please create a .env file with your OpenAI API key');
  }
}); 