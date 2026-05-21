import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Navigation from "~/components/Navigation";
import HeroSection from "~/components/HeroSection";
import ExperienceSection from "~/components/ExperienceSection";
import ContactSection from "~/components/ContactSection";
import NavDots from "~/components/NavDots";
import initializeScrollHandler from "~/utils/scrollHandler";
import { siteContent } from "~/data/content";

const SECTION_IDS = ["section1", "section2", "section3"];

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setIsLoaded(true);
    const mobile = /Mobi|Android/i.test(navigator.userAgent);

    if (!mobile) {
      // Desktop: snap-scroll on wheel/arrow keys
      return initializeScrollHandler(setCurrentPage);
    } else {
      // Mobile: use IntersectionObserver to track active section for dots
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = SECTION_IDS.indexOf(entry.target.id);
              if (index !== -1) setCurrentPage(index + 1);
            }
          });
        },
        { threshold: 0.5 }
      );
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <Head>
        <title>{siteContent.meta.title}</title>
        <meta name="description" content={siteContent.meta.description} />
        <meta name="author" content={siteContent.meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/KleanZ.ico" />
      </Head>
      <Navigation />
      <main className={`flex flex-col ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
        <HeroSection isLoaded={isLoaded} />
        <ExperienceSection />
        <ContactSection />
      </main>
      <NavDots currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Home;
