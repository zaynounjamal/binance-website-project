document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.material-card, .feature, .point');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize elements with starting styles
    const initializeElements = () => {
        const elements = document.querySelectorAll('.material-card, .feature, .point');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease';
        });
    };

    // Track PDF downloads
    const trackDownloads = () => {
        const downloadButtons = document.querySelectorAll('.download-btn');
        
        downloadButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const fileName = e.currentTarget.getAttribute('href').split('/').pop();
                console.log(`Downloaded: ${fileName}`);
                // Add analytics tracking here
            });
        });
    };

    // Initialize
    initializeElements();
    trackDownloads();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial check for elements in view
    animateOnScroll();
});
