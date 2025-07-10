// Global variables
let selectedType = '';
let selectedTone = '';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    console.log('AI Writing Assistant loaded!');
});

// Select writing type
function selectType(type) {
    selectedType = type;
    
    // Update button styles
    document.querySelectorAll('.writing-type-btn').forEach(btn => {
        btn.classList.remove('bg-white/30', 'border-white/40');
        btn.classList.add('bg-white/20', 'border-white/20');
    });
    
    // Highlight selected button
    event.target.classList.remove('bg-white/20', 'border-white/20');
    event.target.classList.add('bg-white/30', 'border-white/40');
    
    // Show input form
    document.getElementById('inputForm').style.display = 'block';
    
    // Update form title
    const titles = {
        'email': 'Generate Professional Email',
        'social': 'Generate Social Media Post',
        'blog': 'Generate Blog Outline'
    };
    document.getElementById('formTitle').textContent = titles[type];
    
    // Scroll to form
    document.getElementById('inputForm').scrollIntoView({ behavior: 'smooth' });
}

// Select tone
function selectTone(tone) {
    selectedTone = tone;
    
    // Update button styles
    document.querySelectorAll('.tone-btn').forEach(btn => {
        btn.classList.remove('bg-white/30', 'border-white/40');
        btn.classList.add('bg-white/20', 'border-white/20');
    });
    
    // Highlight selected button
    event.target.classList.remove('bg-white/20', 'border-white/20');
    event.target.classList.add('bg-white/30', 'border-white/40');
}

// Generate content
async function generateContent() {
    const context = document.getElementById('contextInput').value.trim();
    
    // Validation
    if (!context) {
        showNotification('Please provide some context for your content.', 'error');
        return;
    }
    
    if (!selectedType) {
        showNotification('Please select a content type.', 'error');
        return;
    }
    
    if (!selectedTone) {
        showNotification('Please select a tone.', 'error');
        return;
    }
    
    // Show loading state
    showLoadingState();
    
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: selectedType,
                context: context,
                tone: selectedTone
            })
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
            showResults(data.content);
            showNotification('Content generated successfully!', 'success');
        } else {
            throw new Error(data.error || 'Failed to generate content');
        }
        
    } catch (error) {
        console.error('Error:', error);
        showNotification(error.message || 'Failed to generate content. Please try again.', 'error');
        hideLoadingState();
    }
}

// Show loading state
function showLoadingState() {
    document.getElementById('inputForm').style.display = 'none';
    document.getElementById('loadingState').style.display = 'block';
    document.getElementById('resultsSection').style.display = 'none';
}

// Hide loading state
function hideLoadingState() {
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('inputForm').style.display = 'block';
}

// Show results
function showResults(content) {
    document.getElementById('generatedContent').textContent = content;
    document.getElementById('resultsSection').style.display = 'block';
    document.getElementById('loadingState').style.display = 'none';
    
    // Scroll to results
    document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
}

// Copy to clipboard
async function copyToClipboard() {
    const content = document.getElementById('generatedContent').textContent;
    
    try {
        await navigator.clipboard.writeText(content);
        showNotification('Content copied to clipboard!', 'success');
    } catch (error) {
        console.error('Failed to copy:', error);
        showNotification('Failed to copy to clipboard.', 'error');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 p-4 rounded-lg text-white z-50 fade-in ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    }`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Reset form
function resetForm() {
    selectedType = '';
    selectedTone = '';
    document.getElementById('contextInput').value = '';
    
    // Reset button styles
    document.querySelectorAll('.writing-type-btn, .tone-btn').forEach(btn => {
        btn.classList.remove('bg-white/30', 'border-white/40');
        btn.classList.add('bg-white/20', 'border-white/20');
    });
    
    // Hide forms
    document.getElementById('inputForm').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('loadingState').style.display = 'none';
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + Enter to generate content
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault();
        generateContent();
    }
    
    // Escape to reset
    if (event.key === 'Escape') {
        resetForm();
    }
});

// Add some example prompts for inspiration
const examplePrompts = {
    email: [
        "Follow-up email after a job interview for a software developer position",
        "Professional email to schedule a meeting with a client",
        "Thank you email after receiving a gift from a colleague"
    ],
    social: [
        "Instagram post about a new product launch",
        "LinkedIn post sharing a professional achievement",
        "Twitter post about a tech conference experience"
    ],
    blog: [
        "Blog outline about the future of AI in healthcare",
        "Blog outline about sustainable living tips",
        "Blog outline about remote work productivity"
    ]
};

// Add example prompts to the UI (optional enhancement)
function addExamplePrompts() {
    const contextInput = document.getElementById('contextInput');
    
    // Add placeholder text with examples
    contextInput.addEventListener('focus', function() {
        if (!this.value && selectedType) {
            const examples = examplePrompts[selectedType];
            if (examples) {
                const randomExample = examples[Math.floor(Math.random() * examples.length)];
                this.placeholder = `e.g., ${randomExample}`;
            }
        }
    });
}

// Initialize example prompts
document.addEventListener('DOMContentLoaded', addExamplePrompts); 