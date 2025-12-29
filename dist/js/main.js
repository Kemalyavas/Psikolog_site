// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Navbar shadow on scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                header.classList.add('shadow-sm');
            } else {
                header.classList.remove('shadow-sm');
            }
        });
    }

    // Scroll reveal animations - modern & professional
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Target all sections (except first visible) and footer
    const allSections = document.querySelectorAll('section, article, footer');
    const revealTargets = [];

    allSections.forEach((section, index) => {
        // Skip header
        if (section.closest('header')) return;
        
        const rect = section.getBoundingClientRect();
        const isAboveFold = rect.top < window.innerHeight * 0.85;
        
        if (index === 0 && isAboveFold) {
            // First section already visible - don't animate
            return;
        }
        
        revealTargets.push(section);
    });

    if (revealTargets.length && !prefersReducedMotion) {
        // Apply initial hidden state - more dramatic for visibility
        revealTargets.forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(60px) scale(0.97)';
            el.style.transition = 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
            el.style.transitionDelay = `${(i % 3) * 120}ms`;
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.05,
                rootMargin: '0px 0px -80px 0px'
            }
        );

        revealTargets.forEach((el) => observer.observe(el));
    }
});

// WhatsApp Function
function openWhatsApp() {
    // Replace with actual WhatsApp number
    const phoneNumber = '905XXXXXXXXX';
    const message = encodeURIComponent('Merhaba, randevu almak istiyorum.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}
