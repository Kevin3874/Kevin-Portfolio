let isTransitioning = false;
let currentSection = 0;

const initializeScrollHandler = (setCurrentPage: (currentPage: number) => void) => {
  if (typeof window === 'undefined') {
    return;
  }
  const smoothScrollTo = (y: number) => new Promise<void>((resolve) => {
    const scrollListener = () => {
      if (Math.abs(window.scrollY - y) < 1) {
        window.removeEventListener('scroll', scrollListener);
        resolve();
      }
    };
    window.addEventListener('scroll', scrollListener);
    window.scrollTo({ top: y, behavior: 'smooth' });
    setTimeout(resolve, 500);
  }).then().catch();

  const handleScroll = (e: WheelEvent) => {
    e.preventDefault();
    const sections = document.querySelectorAll('section');
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

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isTransitioning && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault();
      isTransitioning = true;
      const sections = document.querySelectorAll('section');
      const scrollDirection = e.key === 'ArrowDown' ? 1 : -1;
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
            }, 500);
          });
      }
    }
  };

  let lastScrollTime = 0;

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
