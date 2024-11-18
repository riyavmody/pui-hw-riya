document.addEventListener('DOMContentLoaded', function() {
    const scrollArrow = document.querySelector('.scroll-arrow');
    const storySection = document.querySelector('.story-section');
    
    // Smooth scroll for arrow
    scrollArrow.addEventListener('click', () => {
        storySection.scrollIntoView({ behavior: 'smooth' });
    });
});