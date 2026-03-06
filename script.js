// Generate floating hearts with random positions
function createHearts() {
    const container = document.querySelector('.hearts-container');
    const heartSymbols = ['❤️', '💕', '💗', '💖'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // Random horizontal position (0-100%)
        heart.style.left = Math.random() * 100 + '%';
        
        // Random animation delay
        heart.style.animationDelay = Math.random() * 5 + 's';
        
        // Random animation duration (6-10s)
        heart.style.animationDuration = (6 + Math.random() * 4) + 's';
        
        // Random size (15-35px)
        heart.style.fontSize = (15 + Math.random() * 20) + 'px';
        
        container.appendChild(heart);
    }
}

// Add dynamic sparkles
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 4000);
}

// Create sparkles periodically
setInterval(createSparkle, 500);

// Initial sparkles
for (let i = 0; i < 20; i++) {
    setTimeout(createSparkle, i * 200);
}

// Add gentle parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
    const glows = document.querySelectorAll('.glow');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    glows.forEach((glow, index) => {
        const factor = index === 0 ? 1 : -1;
        glow.style.transform = `translate(${x * 20 * factor}px, ${y * 20 * factor}px)`;
    });
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', () => {
    // Adjust font sizes based on viewport
    const vw = window.innerWidth;
    const container = document.querySelector('.container');
    
    if (vw < 480) {
        container.style.padding = '20px 15px';
    } else if (vw < 768) {
        container.style.padding = '30px 20px';
    } else {
        container.style.padding = '40px 20px';
    }
});

// Initialize
createHearts();

