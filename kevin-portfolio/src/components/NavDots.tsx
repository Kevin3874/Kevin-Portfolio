const SECTION_IDS = ["section1", "section2", "section3"] as const;

type Props = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export default function NavDots({ currentPage, setCurrentPage }: Props) {
  const scrollToSection = (index: number) => {
    const id = SECTION_IDS[index] ?? "";
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setCurrentPage(index + 1);
  };

  return (
    <nav className="fixed bottom-6 right-5 z-50 flex flex-col gap-2">
      {SECTION_IDS.map((_, i) => (
        <button
          key={i}
          aria-label={`Jump to section ${i + 1}`}
          onClick={() => scrollToSection(i)}
          className={`h-2 w-2 rounded-full transition-all duration-300 ${
            currentPage === i + 1
              ? "scale-125 bg-blue-500"
              : "bg-zinc-600 hover:bg-zinc-400"
          }`}
        />
      ))}
    </nav>
  );
}
