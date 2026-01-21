// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// Scroll Reveal Animation using Intersection Observer
const observerOptions = {
    threshold: 0.1
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add reveal classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add reveal class to sections and cards
    const revealElements = [
        '.hero-content', '.hero-image',
        '.stat-card', '.course-card',
        '.section-title', '.feature-item',
        '.glass-card'
    ];

    revealElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('reveal');
            revealOnScroll.observe(el);
        });
    });

    // Staggered animation for stats and courses
    document.querySelectorAll('.stat-card, .course-card').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.disabled = true;

            // Simulate sending
            setTimeout(() => {
                alert('Thank you! Your message has been sent successfully.');
                btn.innerText = originalText;
                btn.disabled = false;
                contactForm.reset();
            }, 1500);
        });
    }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
