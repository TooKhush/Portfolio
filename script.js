// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', function() {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Smooth scroll for project links
document.querySelectorAll('.project-link, .resume-btn').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

// Add hover effects for bento boxes
const bentoBoxes = document.querySelectorAll('.bento-box');
bentoBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    box.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Mobile touch feedback
if ('ontouchstart' in window) {
    bentoBoxes.forEach(box => {
        box.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        box.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// Smooth scrolling for experience timeline
const experienceScroll = document.querySelector('.experience-scroll');
if (experienceScroll) {
    experienceScroll.style.scrollBehavior = 'smooth';
}
