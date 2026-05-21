import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import HeroSection from "~/components/HeroSection";
import ExperienceSection from "~/components/ExperienceSection";
import ContactSection from "~/components/ContactSection";
import NavDots from "~/components/NavDots";
import initializeScrollHandler from "~/utils/scrollHandler";
import { siteContent } from "~/data/content";

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const mobile = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(mobile);
    if (!mobile) {
      return initializeScrollHandler(setCurrentPage);
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
      <main className={`flex flex-col ${isLoaded ? "animate-fade-in" : ""}`}>
        <HeroSection isLoaded={isLoaded} />
        <ExperienceSection />
        <ContactSection />
      </main>
      {!isMobile && (
        <NavDots currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </>
  );
};

export default Home;
