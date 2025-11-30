// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = menuToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
        
        // Close menu when clicking on a link (but not dropdown parents)
        const navLinks = navMenu.querySelectorAll('a:not(.has-dropdown > a)');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Dropdown functionality for desktop and mobile
    const dropdownParents = document.querySelectorAll('.has-dropdown');
    dropdownParents.forEach(parent => {
        const link = parent.querySelector('a');
        const dropdown = parent.querySelector('.dropdown-menu');
        
        if (link && dropdown) {
            // For mobile: toggle on click
            link.addEventListener('click', function(e) {
                // Only prevent default and toggle on mobile/tablet
                if (window.innerWidth <= 968) {
                    e.preventDefault();
                    parent.classList.toggle('active');
                    dropdown.style.display = parent.classList.contains('active') ? 'block' : 'none';
                    
                    // Close other dropdowns
                    dropdownParents.forEach(otherParent => {
                        if (otherParent !== parent) {
                            otherParent.classList.remove('active');
                            const otherDropdown = otherParent.querySelector('.dropdown-menu');
                            if (otherDropdown) otherDropdown.style.display = 'none';
                        }
                    });
                }
            });
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        let lastScroll = 0;
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (form.classList.contains('newsletter-form')) {
                e.preventDefault();
                const email = form.querySelector('input[type="email"]').value;
                alert('Thank you for subscribing! We\'ll send mountain landscaping tips to ' + email);
                form.reset();
            }
        });
    });
});

// Hamburger menu functionality (legacy support)
const hamburger = document.getElementById('hamburger');
const navMenuLegacy = document.getElementById('nav-menu');

if (hamburger && navMenuLegacy) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenuLegacy.classList.toggle('active');
    });
}

// Navbar scroll effect (legacy support)
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .blog-card, .process-step');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});
