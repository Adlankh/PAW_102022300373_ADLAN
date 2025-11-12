// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Mode Terang';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Mode Terang';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙 Mode Gelap';
        localStorage.setItem('theme', 'light');
    }
});

// Profile Image Animation
const profileImg = document.getElementById('profileImg');
profileImg.addEventListener('click', () => {
    profileImg.style.transform = 'scale(1.2) rotate(360deg)';
    setTimeout(() => {
        profileImg.style.transform = 'scale(1) rotate(0deg)';
    }, 500);
});

// Skill Tags Click Effect
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const originalText = tag.textContent;
        tag.textContent = '✓ ' + originalText;
        tag.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        setTimeout(() => {
            tag.textContent = originalText;
            tag.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }, 1000);
    });
});

// Smooth Scroll Animation for Sections
const sections = document.querySelectorAll('.section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease';
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Add typing effect to profession text
const professionText = document.querySelector('.profession');
const originalText = professionText.textContent;
professionText.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        professionText.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

console.log('🎉 Website CV Adlan berhasil dimuat!');
console.log('💡 Tip: Klik foto profil untuk animasi menarik!');
