// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')) {
        themeToggleBtn.textContent = 'Switch to Dark Theme';
    } else {
        themeToggleBtn.textContent = 'Switch to Light Theme';
    }
});

// Typing Effect
const typedTextElement = document.getElementById('typed-text');
const textToType = "Proactive SOC Analyst with 4 years of experience in monitoring, detecting, and responding to cyber threats. Strong knowledge of security principles, incident response, and analytical skills ensures data and system integrity.";
let index = 0;

function typeText() {
    if (index < textToType.length) {
        typedTextElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
}

window.onload = typeText;

// Scroll Animations
const sections = document.querySelectorAll('.fade-in-section');
const observerOptions = {
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('visible');
        sectionObserver.unobserve(entry.target);
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
