/* 
   Manju Enterprises
   JavaScript Functionality
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Set current year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. Sticky Navbar
    const navbar = document.getElementById('navbar');
    // If not on homepage, maybe we want it solid immediately? The CSS has .solid-nav for that if added to HTML,
    // but the scroll listener is fine to keep universally.
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 4. Hero Slideshow (Only on homepage)
    const slideshowContainer = document.querySelector('.slideshow');
    const slideCaption = document.getElementById('slide-caption');
    
    if (slideshowContainer) {
        const slideData = [
            { img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1600&q=80', text: 'Precision Color Accuracy' },
            { img: 'https://images.unsplash.com/photo-1621245648500-1c9f4d458641?w=1600&q=80', text: 'High-Speed Digital Printing' },
            { img: 'https://images.unsplash.com/photo-1588693892790-2ad16a30b5e4?w=1600&q=80', text: 'Expert Color Calibration' },
            { img: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=1600&q=80', text: 'Vibrant Screen Printing' },
            { img: 'https://images.unsplash.com/photo-1553456558-bef63d532099?w=1600&q=80', text: 'Premium Finishing & Binding' }
        ];

        // Inject slides
        slideData.forEach((data, index) => {
            const div = document.createElement('div');
            div.classList.add('slide');
            if (index === 0) div.classList.add('active');
            div.style.backgroundImage = `url(${data.img})`;
            slideshowContainer.appendChild(div);
        });

        // Rotate slides
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
            if (slideCaption) {
                slideCaption.textContent = slideData[currentSlide].text;
            }
        }, 5000);
    }

    // 5. Scroll Reveal Animation (Intersection Observer)
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
