document.addEventListener('DOMContentLoaded', function() {
    const scrollArrow = document.querySelector('#arrow');
    const storySection = document.querySelector('.intro-section');
    const swirlLeft = document.querySelector('.swirl-left');
    const swirlRight = document.querySelector('.swirl-right');
    const aosSection = document.querySelector('.aos-section');
    
    // Smooth scroll for arrow
    scrollArrow.addEventListener('click', () => {
      storySection.scrollIntoView({ behavior: 'smooth' });
    });
  
    // Parallax effect for swirls
    window.addEventListener('scroll', () => {
      const rect = aosSection.getBoundingClientRect();
      const scrollPosition = window.pageYOffset;
      const sectionTop = rect.top + scrollPosition;
      const sectionBottom = rect.bottom + scrollPosition;
      const viewportHeight = window.innerHeight;
  
      if (scrollPosition + viewportHeight > sectionTop && scrollPosition < sectionBottom) {
        const relativeScroll = scrollPosition - sectionTop;
        const speed = 0.5;
  
        swirlLeft.style.transform = `rotate(180deg) translateY(${relativeScroll * speed}px)`;
        swirlRight.style.transform = `translateY(-${relativeScroll * speed}px)`;
      }
    });
  });
  