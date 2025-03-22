// Copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('section').forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Particle animation
function createParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            left: ${Math.random() * 100}%;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            animation-duration: ${Math.random() * 5 + 5}s;
            animation-delay: ${Math.random() * 3}s;
        `;
        particles.appendChild(particle);
    }
}
createParticles();

// Ripple effect
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', function(e) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            background: rgba(41, 128, 185, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            animation: rippleEffect 0.6s ease-out;
        `;

        const rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple keyframe
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes rippleEffect {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(10); opacity: 0; }
    }
`, styleSheet.cssRules.length);

// Card animation delays
document.querySelectorAll('.animated-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});