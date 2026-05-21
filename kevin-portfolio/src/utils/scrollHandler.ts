let isTransitioning = false;
let currentSection = 0;

const initializeScrollHandler = (setCurrentPage: (page: number) => void) => {
  if (typeof window === "undefined") return;

  let lastScrollTime = 0;

  const smoothScrollTo = (y: number) =>
    new Promise<void>((resolve) => {
      const scrollListener = () => {
        if (Math.abs(window.scrollY - y) < 1) {
          window.removeEventListener("scroll", scrollListener);
          resolve();
        }
      };
      window.addEventListener("scroll", scrollListener);
      window.scrollTo({ top: y, behavior: "smooth" });
      setTimeout(resolve, 500);
    });

  const handleScroll = (e: WheelEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastScrollTime < 1200) return;
    lastScrollTime = now;

    if (isTransitioning) return;

    const sections = document.querySelectorAll("section");
    isTransitioning = true;
    currentSection = Math.min(
      Math.max(currentSection + Math.sign(e.deltaY), 0),
      sections.length - 1
    );
    setCurrentPage(currentSection + 1);

    const target = sections[currentSection];
    if (target) {
      document.body.style.overflow = "hidden";
      void smoothScrollTo(target.offsetTop).then(() => {
        setTimeout(() => {
          isTransitioning = false;
          document.body.style.overflow = "auto";
        }, 0);
      });
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isTransitioning || (e.key !== "ArrowDown" && e.key !== "ArrowUp")) return;
    e.preventDefault();
    isTransitioning = true;

    const sections = document.querySelectorAll("section");
    const direction = e.key === "ArrowDown" ? 1 : -1;
    currentSection = Math.min(Math.max(currentSection + direction, 0), sections.length - 1);
    setCurrentPage(currentSection + 1);

    const target = sections[currentSection];
    if (target) {
      document.body.style.overflow = "hidden";
      void smoothScrollTo(target.offsetTop).then(() => {
        setTimeout(() => {
          isTransitioning = false;
          document.body.style.overflow = "auto";
        }, 500);
      });
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("wheel", handleScroll, { passive: false });

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("wheel", handleScroll);
    document.body.style.overflow = "auto";
  };
};

export default initializeScrollHandler;
