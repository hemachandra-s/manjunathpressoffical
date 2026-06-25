/* 
   Manju Enterprises
   JavaScript Functionality
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 3. Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Hero Slideshow
    const slideshowContainer = document.querySelector('.slideshow');
    const images = [
        'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1600&q=80', // Print shop / offset machine vibe
        'https://images.unsplash.com/photo-1621245648500-1c9f4d458641?w=1600&q=80', // Digital print
        'https://images.unsplash.com/photo-1588693892790-2ad16a30b5e4?w=1600&q=80', // Color calibration
        'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=1600&q=80', // Screen printing / art
        'https://images.unsplash.com/photo-1553456558-bef63d532099?w=1600&q=80'  // Printed materials
    ];

    // Inject slides
    images.forEach((imgSrc, index) => {
        const div = document.createElement('div');
        div.classList.add('slide');
        if (index === 0) div.classList.add('active');
        div.style.backgroundImage = `url(${imgSrc})`;
        slideshowContainer.appendChild(div);
    });

    // Rotate slides
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);

    // 5. Inject Services
    const servicesList = [
        "Offset Printing", "Digital Printing", "Screen Printing", 
        "Visiting Cards", "Letter Heads", "ID Cards", 
        "Company Reports", "Register Books", "Tags Printing", 
        "Bill Books", "Stickers", "Manual Books", 
        "Brochures", "Vinyl Printing", "Rubber Stamps", 
        "Book Binding", "Xerox"
    ];

    const servicesGrid = document.querySelector('.services-grid');
    servicesList.forEach(service => {
        const div = document.createElement('div');
        div.classList.add('glass-card', 'service-item');
        div.innerHTML = `
            <i class="fas fa-check-circle gold-text"></i>
            <span>${service}</span>
        `;
        servicesGrid.appendChild(div);
    });

    // 6. Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});
