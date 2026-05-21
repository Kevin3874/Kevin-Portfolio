const SECTION_IDS = ["section1", "section2", "section3"] as const;

type Props = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export default function NavDots({ currentPage, setCurrentPage }: Props) {
  const scrollToSection = (index: number) => {
    if (index === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(SECTION_IDS[index] ?? "");
      if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
    setCurrentPage(index + 1);
  };

  return (
    <nav className="fixed bottom-4 right-4 flex flex-col space-y-2">
      {SECTION_IDS.map((_, i) => (
        <div
          key={i}
          className={`h-4 w-4 cursor-pointer rounded-full ${
            currentPage >= i + 1 ? "bg-[#D4A373]" : "bg-white"
          }`}
          onClick={() => scrollToSection(i)}
        />
      ))}
    </nav>
  );
}
