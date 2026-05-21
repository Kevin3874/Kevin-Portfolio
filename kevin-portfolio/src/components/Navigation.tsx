import { siteContent } from "~/data/content";

const NAV_ITEMS = [
  { label: "About", id: "section1" },
  { label: "Experience", id: "section2" },
  { label: "Contact", id: "section3" },
] as const;

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navigation() {
  const { hero, links } = siteContent;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-semibold text-zinc-100 transition-colors hover:text-blue-400"
        >
          {hero.name}
        </button>
        <nav className="flex items-center gap-6">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="hidden text-sm text-zinc-400 transition-colors hover:text-zinc-100 sm:block"
            >
              {label}
            </button>
          ))}
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
