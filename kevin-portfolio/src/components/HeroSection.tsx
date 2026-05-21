import Image from "next/image";
import { siteContent } from "~/data/content";

type Props = { isLoaded: boolean };

export default function HeroSection({ isLoaded }: Props) {
  const { hero, about } = siteContent;

  return (
    <section
      id="section1"
      className="flex flex-grow flex-col-reverse md:h-[88vh] md:flex-row"
    >
      {/* About column — right on desktop, bottom on mobile */}
      <div className="relative order-1 flex w-full flex-col items-center justify-center bg-[#CCD5AE] p-8 text-[#333] md:order-2 md:w-3/5">
        <div className={`mt-24 ${isLoaded ? "animate-slide-in" : ""}`}>
          <h1 className="mb-6 text-center text-5xl font-bold">{about.headline}</h1>
          <p className="mx-auto max-w-lg text-center text-xl">{about.bio}</p>
        </div>
        <div className="flex flex-row items-center justify-around pt-20 md:pt-32">
          {about.highlights.map((h) => (
            <p key={h.line1} className="mx-12 text-center">
              {h.line1}
              <br />
              {h.line2}
              <br />
              {h.line3}
            </p>
          ))}
        </div>
      </div>

      {/* Hero column — left on desktop, top on mobile */}
      <div className="order-2 flex w-full flex-col items-center justify-center bg-[#f5f5dc] p-8 py-28 text-[#333] md:order-1">
        <Image
          src={hero.photo}
          alt={`${hero.name} portrait`}
          width={288}
          height={288}
          className="mb-8 w-48 rounded-full shadow-lg md:w-72"
          priority
        />
        <h1 className="mb-6 text-center text-6xl font-extrabold">{hero.name}</h1>
        <div className="text-center">
          {hero.titles.map((title) => (
            <h2 key={title} className="typewriter text-3xl">
              {title}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
}
