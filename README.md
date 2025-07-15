# 🫧 BubbleRoot Avatar Studios

> **AI-Powered Talking Avatar Generation Platform**

Transform a single photo and script into high-quality avatar videos using cutting-edge AI technology. BubbleRoot Avatar Studios combines the power of modern web technologies with AI-driven avatar generation to create realistic talking avatars.

## 🎯 Features

### Core Functionality
- **📸 Photo Upload**: Drag & drop or click to upload photos with support for multiple formats
- **🎭 Sample Gallery**: Pre-loaded sample photos with real faces from Unsplash
- **✍️ Script Input**: Smart text input with character counting and validation
- **🎵 Voice Selection**: Multiple voice options with realistic speech synthesis
- **🤖 AI Enhancement**: Automatic script enhancement using AI models
- **🎬 Motion Controls**: Expressive motion settings for dynamic avatars
- **🎲 Surprise Me**: Random generation with creative combinations

### Technical Features
- **🌐 Modern Web Interface**: Built with HTML5, CSS3, and ES6+ JavaScript
- **🎨 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **⚡ Real-time Processing**: Instant feedback and live preview
- **🔄 Progressive Enhancement**: Graceful fallbacks for all features
- **🛡️ Input Validation**: Comprehensive error handling and user feedback

## 🚀 Live Demo

**🌟 [Try BubbleRoot Avatar Studios](https://newaysecurity.github.io/BubbleRoot-Avatar-Studios/)**

## 📱 Screenshots

![BubbleRoot Avatar Studios Interface](https://via.placeholder.com/800x400?text=BubbleRoot+Avatar+Studios+Interface)

## 🛠️ Installation

### Quick Start (Frontend Only)
```bash
# Clone the repository
git clone https://github.com/NewaySecurity/BubbleRoot-Avatar-Studios.git

# Navigate to project directory
cd BubbleRoot-Avatar-Studios

# Open in browser
open index.html
```

### Full Stack Setup (With Backend)
```bash
# Clone the repository
git clone https://github.com/NewaySecurity/BubbleRoot-Avatar-Studios.git

# Navigate to project directory
cd BubbleRoot-Avatar-Studios

# Install backend dependencies
npm install

# Create environment file
cp .env.example .env

# Start the development server
npm run dev
```

## 🎮 Usage

### Basic Operation
1. **Upload Photo**: Click the upload area or drag & drop an image
2. **Enter Script**: Type your message (max 210 characters)
3. **Select Voice**: Choose from available voice options
4. **Add Motion**: Optionally describe gestures and expressions
5. **Generate**: Click "Generate Avatar Video" to create your avatar

### Advanced Features
- **Sample Photos**: Use the "Try a sample photo" button for quick testing
- **Surprise Me**: Let AI generate random creative combinations
- **Expressive Motion**: Toggle between standard and expressive animations
- **Character Counter**: Real-time feedback on script length

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
# AI Configuration
HUGGINGFACE_API_KEY=your_api_key_here
OPENAI_API_KEY=your_openai_key_here

# TTS Configuration
TTS_MODEL=microsoft/speecht5_tts
DEFAULT_VOICE=sarah

# Server Configuration
PORT=3000
NODE_ENV=development
```

### Voice Options
- **Sarah**: Professional Female Voice
- **Mike**: Professional Male Voice
- **Emma**: Friendly Female Voice
- **David**: Authoritative Male Voice

## 🏗️ Architecture

### Frontend Structure
```
BubbleRoot-Avatar-Studios/
├── index.html              # Main HTML file
├── styles.css             # Modern CSS styling
├── script.js              # JavaScript functionality
├── assets/                # Images and media
└── README.md              # Project documentation
```

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, Custom Properties
- **Icons**: Font Awesome
- **Animations**: CSS Transitions & Transforms
- **AI Integration**: Hugging Face API, OpenAI API

## 🌐 Deployment

### GitHub Pages (Recommended)
1. Push your code to GitHub
2. Go to Settings → Pages
3. Select "Deploy from branch"
4. Choose "main" branch
5. Your site will be available at `https://username.github.io/BubbleRoot-Avatar-Studios/`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build` (if using build process)
3. Set publish directory: `.`
4. Deploy automatically on push

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts to deploy

## 🔮 Future Enhancements

### Planned Features
- [ ] **Real-time Avatar Animation**: Live lip-sync and facial expressions
- [ ] **Voice Cloning**: Upload your own voice samples
- [ ] **3D Avatar Models**: Interactive 3D avatars with Three.js
- [ ] **Multi-language Support**: Generate avatars in different languages
- [ ] **Video Export**: Download generated avatar videos
- [ ] **Social Sharing**: Share avatars directly to social media
- [ ] **Custom Backgrounds**: Add virtual backgrounds to avatars
- [ ] **Emotion Recognition**: Detect and apply emotions from text

### Technical Improvements
- [ ] **WebRTC Integration**: Real-time video processing
- [ ] **WebGL Rendering**: Hardware-accelerated graphics
- [ ] **Progressive Web App**: Offline functionality
- [ ] **Cloud Storage**: Save and manage avatar projects
- [ ] **API Integration**: Connect with popular services

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex functionality
- Test on multiple browsers and devices
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Hugging Face** for AI model APIs
- **Unsplash** for sample photos
- **Font Awesome** for icons
- **Open source community** for inspiration and tools

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/NewaySecurity/BubbleRoot-Avatar-Studios/issues)
- **Discussions**: [GitHub Discussions](https://github.com/NewaySecurity/BubbleRoot-Avatar-Studios/discussions)
- **Email**: support@newaysecurity.com

---

**Made with ❤️ by [NewaySecurity](https://github.com/NewaySecurity)**

**⭐ Star this repository if you find it useful!**
