let isTransitioning = false;
let currentSection = 0;

const initializeScrollHandler = (setCurrentPage) => {
  const sections = document.querySelectorAll('section');
  let lastScrollTime = 0;

  const smoothScrollTo = (y) => new Promise((resolve) => {
    const scrollListener = () => {
      if (Math.abs(window.scrollY - y) < 1) {
        window.removeEventListener('scroll', scrollListener);
        resolve();
      }
    };
    window.addEventListener('scroll', scrollListener);
    window.scrollTo({ top: y, behavior: 'smooth' });
    setTimeout(resolve, 500);
  });
  

  const handleScroll = (e) => {
    e.preventDefault(); 
    const now = Date.now();
    const timeSinceLastScroll = now - lastScrollTime;
  
    if (timeSinceLastScroll < 1200) {  
      e.preventDefault();
      return;
    }
  
    lastScrollTime = now;
    
    if (!isTransitioning) {
      isTransitioning = true;
      const scrollDirection = Math.sign(e.deltaY);
      currentSection = Math.min(Math.max(currentSection + scrollDirection, 0), sections.length - 1);
      setCurrentPage(currentSection + 1);
      const targetSection = sections[currentSection];
      if (targetSection) {
        document.body.style.overflow = 'hidden';
        smoothScrollTo(targetSection.offsetTop)
          .then(() => {
            setTimeout(() => {
              isTransitioning = false;
              document.body.style.overflow = 'auto';
            }, 0); 
          });
      }
    } else {
      e.preventDefault();
    }
  };
  

  const handleKeyDown = (e) => {
    if (!isTransitioning && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault();
      isTransitioning = true;
      const scrollDirection = e.key === 'ArrowDown' ? 1 : -1;
      currentSection = Math.min(Math.max(currentSection + scrollDirection, 0), sections.length - 1);
      setCurrentPage(currentSection + 1);
      const targetSection = sections[currentSection];
      if (targetSection) {
        document.body.style.overflow = 'hidden';
        smoothScrollTo(targetSection.offsetTop)
          .then(() => {
            // Introduce a delay after the scroll event is handled
            setTimeout(() => {
              isTransitioning = false;
              document.body.style.overflow = 'auto';
            }, 500); // Adjust this delay as needed
          });
      }
    }
  };
  

  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('wheel', handleScroll, { passive: false });

  const cleanup = () => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('wheel', handleScroll);
    document.body.style.overflow = 'auto';
  };

  return cleanup;
};

export default initializeScrollHandler;