// BubbleRoot Avatar Studios - Interactive JavaScript

// Global variables
let selectedPhoto = null;
let isExpressiveMotion = false;
let isGenerating = false;

// DOM elements
const uploadArea = document.getElementById('uploadArea');
const photoInput = document.getElementById('photoInput');
const scriptInput = document.getElementById('scriptInput');
const charCount = document.getElementById('charCount');
const voiceSelect = document.getElementById('voiceSelect');
const motionInput = document.getElementById('motionInput');
const sampleGrid = document.getElementById('sampleGrid');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateCharCount();
});

// Initialize all event listeners
function initializeEventListeners() {
    // Upload area interactions
    uploadArea.addEventListener('click', () => photoInput.click());
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);
    
    // Photo input change
    photoInput.addEventListener('change', handlePhotoSelect);
    
    // Script input character counting
    scriptInput.addEventListener('input', updateCharCount);
    
    // Sample photo grid toggle
    const sampleBtn = document.querySelector('.sample-btn');
    if (sampleBtn) {
        sampleBtn.addEventListener('click', toggleSampleGrid);
    }
}

// Handle drag and drop functionality
function handleDragOver(e) {
    e.preventDefault();
    uploadArea.classList.add('dragover');
}

function handleDragLeave(e) {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
        handlePhotoFile(files[0]);
    } else {
        showMessage('Please drop a valid image file', 'error');
    }
}

// Handle photo selection
function handlePhotoSelect(e) {
    const file = e.target.files[0];
    if (file) {
        handlePhotoFile(file);
    }
}

// Process selected photo file
function handlePhotoFile(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        selectedPhoto = e.target.result;
        updateUploadArea(file.name);
        showMessage('Photo uploaded successfully!', 'success');
    };
    reader.readAsDataURL(file);
}

// Update upload area with selected photo
function updateUploadArea(filename) {
    uploadArea.innerHTML = `
        <i class="fas fa-check-circle" style="color: #2ecc71;"></i>
        <p>Photo uploaded: ${filename}</p>
        <button type="button" onclick="clearPhoto()" style="margin-top: 10px; padding: 5px 10px; background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer;">Change Photo</button>
    `;
}

// Clear selected photo
function clearPhoto() {
    selectedPhoto = null;
    photoInput.value = '';
    uploadArea.innerHTML = `
        <i class="fas fa-cloud-upload-alt"></i>
        <p>Upload photo or drag and drop here</p>
    `;
}

// Update character count
function updateCharCount() {
    const count = scriptInput.value.length;
    charCount.textContent = count;
    
    // Change color based on character count
    if (count > 180) {
        charCount.style.color = '#e74c3c';
    } else if (count > 140) {
        charCount.style.color = '#f39c12';
    } else {
        charCount.style.color = '#6c757d';
    }
}

// Toggle sample photo grid
function toggleSampleGrid() {
    sampleGrid.classList.toggle('show');
}

// Load sample photo
function loadSamplePhoto() {
    toggleSampleGrid();
}

// Select sample photo
function selectSample(element) {
    // Remove previous selection
    document.querySelectorAll('.sample-photo').forEach(photo => {
        photo.classList.remove('selected');
    });
    
    // Add selection to clicked photo
    element.classList.add('selected');
    
    // Get the image source
    const img = element.querySelector('img');
    selectedPhoto = img.src;
    
    // Update upload area
    updateUploadArea('Sample Photo');
    showMessage('Sample photo selected!', 'success');
}

// Toggle expressive motion
function toggleExpressiveMotion() {
    isExpressiveMotion = !isExpressiveMotion;
    const motionBtn = document.querySelector('.motion-btn');
    
    if (isExpressiveMotion) {
        motionBtn.textContent = 'Standard motion';
        motionBtn.classList.add('active');
        showMessage('Expressive motion enabled', 'info');
    } else {
        motionBtn.textContent = 'More expressive motion';
        motionBtn.classList.remove('active');
        showMessage('Standard motion enabled', 'info');
    }
}

// Generate avatar video with real AI backend
async function generateAvatar() {
    if (isGenerating) return;
    
    // Validate inputs
    if (!selectedPhoto) {
        showMessage('Please upload a photo first', 'error');
        return;
    }
    
    if (!scriptInput.value.trim()) {
        showMessage('Please enter a script', 'error');
        return;
    }
    
    if (!voiceSelect.value) {
        showMessage('Please select a voice', 'error');
        return;
    }
    
    // Start generation process
    isGenerating = true;
    const generateBtn = document.querySelector('.generate-btn');
    const originalText = generateBtn.innerHTML;
    generateBtn.innerHTML = '<div class="loading"></div> Generating...';
    generateBtn.disabled = true;
    
    try {
        // Step 1: Generate AI-enhanced script
        const enhancedScript = await enhanceScriptWithAI(scriptInput.value);
        
        // Step 2: Generate TTS audio
        const ttsResult = await generateTTSAudio(enhancedScript, voiceSelect.value);
        
        // Step 3: Process avatar with photo and audio
        const avatarResult = await processAvatarGeneration({
            photo: selectedPhoto,
            script: enhancedScript,
            voice: voiceSelect.value,
            motion: motionInput.value,
            expressiveMotion: isExpressiveMotion,
            ttsData: ttsResult
        });
        
        // Step 4: Display results
        displayAvatarResult(avatarResult);
        
        showMessage('Avatar video generated successfully!', 'success');
        
    } catch (error) {
        console.error('Avatar generation error:', error);
        showMessage('Error generating avatar: ' + error.message, 'error');
    } finally {
        // Reset button
        generateBtn.innerHTML = originalText;
        generateBtn.disabled = false;
        isGenerating = false;
    }
}

// Simulate avatar generation (replace with actual API call)
async function simulateAvatarGeneration() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Generated successfully');
        }, 3000); // Simulate 3 second generation time
    });
}

// Surprise me function
function surpriseMe() {
    const surpriseScripts = [
        "Hello! Welcome to BubbleRoot Avatar Studios. I'm excited to help you create amazing avatar videos!",
        "Did you know that AI-generated avatars are revolutionizing digital communication?",
        "I can express emotions, gestures, and speak in multiple languages. What would you like me to say?",
        "The future of video content is here, and it's more accessible than ever before!",
        "Let's create something amazing together. Your imagination is the only limit!"
    ];
    
    const surpriseVoices = ['sarah', 'mike', 'emma', 'david'];
    const surpriseMotions = [
        "Friendly wave and warm smile",
        "Professional presentation gestures",
        "Enthusiastic hand movements",
        "Calm and reassuring expressions",
        "Engaging storytelling gestures"
    ];
    
    // Random selections
    const randomScript = surpriseScripts[Math.floor(Math.random() * surpriseScripts.length)];
    const randomVoice = surpriseVoices[Math.floor(Math.random() * surpriseVoices.length)];
    const randomMotion = surpriseMotions[Math.floor(Math.random() * surpriseMotions.length)];
    
    // Apply selections
    scriptInput.value = randomScript;
    voiceSelect.value = randomVoice;
    motionInput.value = randomMotion;
    
    // Update character count
    updateCharCount();
    
    // Show message
    showMessage('Surprise settings applied! Ready to generate your avatar.', 'info');
}

// Show message to user
function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert message
    const main = document.querySelector('main');
    main.insertBefore(messageDiv, main.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Add some sample photos with placeholder images
function initializeSamplePhotos() {
    const samplePhotos = document.querySelectorAll('.sample-photo img');
    const sampleUrls = [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1494790108755-2616b9e4b8a0?w=100&h=100&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face'
    ];
    
    samplePhotos.forEach((img, index) => {
        if (sampleUrls[index]) {
            img.src = sampleUrls[index];
            img.alt = `Sample ${index + 1}`;
        }
    });
}

// Initialize sample photos when page loads
document.addEventListener('DOMContentLoaded', initializeSamplePhotos);

// Export functions for global access
window.loadSamplePhoto = loadSamplePhoto;
window.selectSample = selectSample;
window.toggleExpressiveMotion = toggleExpressiveMotion;
window.generateAvatar = generateAvatar;
window.surpriseMe = surpriseMe;
