# AI Writing Assistant ✍️

A professional AI-powered writing assistant that helps users generate emails, social media posts, and blog outlines. Built with Node.js, Express, and OpenAI's GPT-3.5-turbo.

![AI Writing Assistant](https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge&logo=openai)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.18+-black?style=for-the-badge&logo=express)

## 🚀 Live Demo

**Try it now!** Experience the AI Writing Assistant in action:

🌐 **[Live Demo - Coming Soon]** *(Will be updated after Render deployment)*

*This project demonstrates real AI integration, full-stack development, and production deployment - perfect for showcasing your skills to potential employers!*

## ✨ Features

- **🤖 AI-Powered Content Generation**: Uses OpenAI's GPT-3.5-turbo for high-quality content
- **📧 Professional Emails**: Generate business emails with different tones
- **📱 Social Media Posts**: Create engaging social media content
- **📝 Blog Outlines**: Structure your blog posts with detailed outlines
- **🎨 Multiple Tones**: Professional, casual, friendly, and creative
- **📋 Copy to Clipboard**: One-click copying of generated content
- **⚡ Real-time Generation**: Fast, responsive AI content creation
- **📱 Responsive Design**: Works perfectly on desktop and mobile
- **🎯 User-friendly Interface**: Beautiful, intuitive UI with smooth animations

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-3.5-turbo API
- **Icons**: Font Awesome
- **Deployment**: Ready for Vercel, Railway, Render, or Heroku

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-writing-assistant.git
   cd ai-writing-assistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_actual_openai_api_key_here
   PORT=3000
   ```

4. **Get your OpenAI API key**
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create a new API key
   - Add it to your `.env` file

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🌐 Deployment

### Option 1: Render (Recommended)
1. Fork this repository
2. Connect your GitHub account to Render
3. Create a new Web Service
4. Add environment variable: `OPENAI_API_KEY`
5. Deploy!

### Option 2: Vercel
1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the repository
4. Add environment variable: `OPENAI_API_KEY`
5. Deploy!

### Option 3: Railway
1. Connect your GitHub account to Railway
2. Create a new project from GitHub
3. Add environment variable: `OPENAI_API_KEY`
4. Deploy!

## 📱 Usage

1. **Select Content Type**: Choose between Email, Social Media Post, or Blog Outline
2. **Provide Context**: Describe what you want to write about
3. **Choose Tone**: Select from Professional, Casual, Friendly, or Creative
4. **Generate**: Click "Generate Content" and watch the AI work its magic!
5. **Copy**: Use the copy button to easily copy the generated content

## 🎯 Perfect for Your Resume

This project demonstrates:
- ✅ **AI Integration**: Real OpenAI API implementation
- ✅ **Full-Stack Development**: Node.js backend + modern frontend
- ✅ **API Design**: RESTful API with proper error handling
- ✅ **User Experience**: Beautiful, responsive UI
- ✅ **Production Ready**: Deployable to major platforms
- ✅ **Real-World Application**: Solves actual problems people face

## 🔧 API Endpoints

### POST `/api/generate`
Generate AI content based on user input.

**Request Body:**
```json
{
  "type": "email|social|blog",
  "context": "Your content description",
  "tone": "professional|casual|friendly|creative"
}
```

**Response:**
```json
{
  "success": true,
  "content": "Generated content here...",
  "type": "email",
  "tone": "professional"
}
```

### GET `/api/health`
Health check endpoint.

## 🎨 Customization

### Adding New Content Types
1. Add new case in `server.js` switch statement
2. Update frontend buttons in `index.html`
3. Add corresponding logic in `script.js`

### Styling
- Uses Tailwind CSS for styling
- Custom CSS animations in `<style>` tag
- Easy to customize colors and effects

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your portfolio!

## 🙏 Acknowledgments

- OpenAI for providing the GPT API
- Tailwind CSS for the beautiful styling framework
- Font Awesome for the icons

---

**Ready to impress recruiters? Deploy this AI Writing Assistant and showcase your skills! 🚀** 