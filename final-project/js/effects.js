document.addEventListener('DOMContentLoaded', function() {
    const scrollArrow = document.querySelector('#arrow');
    const storySection = document.querySelector('.intro-section');
    
    // Smooth scroll for arrow
    scrollArrow.addEventListener('click', () => {
        storySection.scrollIntoView({ behavior: 'smooth' });
    });
});
