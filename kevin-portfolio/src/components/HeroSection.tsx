import Image from "next/image";
import Link from "next/link";
import { siteContent } from "~/data/content";

type Props = { isLoaded: boolean };

export default function HeroSection({ isLoaded }: Props) {
  const { hero, about, links } = siteContent;

  return (
    <section
      id="section1"
      className="flex flex-col items-center justify-center bg-zinc-950 px-6 pb-16 pt-20 sm:px-10 lg:min-h-screen lg:px-16 lg:pb-12 lg:pt-24"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center lg:flex-row lg:gap-16 lg:text-left">
        {/* Photo */}
        <div
          className={`relative mb-10 flex-shrink-0 transition-all duration-700 lg:mb-0 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="absolute inset-0 rounded-full bg-blue-500/25 blur-3xl" />
          <Image
            src={hero.photo}
            alt={`${hero.name} portrait`}
            width={260}
            height={260}
            priority
            className="relative h-52 w-52 rounded-full object-cover ring-2 ring-blue-500/30 md:h-60 md:w-60 lg:h-64 lg:w-64"
          />
        </div>

        {/* Content */}
        <div
          className={`max-w-lg transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="mb-5 inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
            Software Engineer @ Meta · Instagram Graph Experiences
          </span>
          <h1 className="mb-5 text-5xl font-extrabold tracking-tight text-zinc-100 md:text-6xl lg:text-7xl">
            {hero.name}
            <span className="text-blue-400">.</span>
          </h1>
          <p className="mb-8 text-base leading-relaxed text-zinc-400 md:text-lg">
            {about.bio}
          </p>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 ring-1 ring-zinc-700 transition-colors hover:bg-zinc-700"
            >
              GitHub →
            </Link>
            <Link
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 ring-1 ring-zinc-700 transition-colors hover:bg-zinc-700"
            >
              LinkedIn →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
