document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation when scrolling into view
    const toolItems = document.querySelectorAll('.tool-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    toolItems.forEach((item, index) => {
        // Initial state for animation
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;

        observer.observe(item);
    });

    console.log('More Tools module loaded.');
});
