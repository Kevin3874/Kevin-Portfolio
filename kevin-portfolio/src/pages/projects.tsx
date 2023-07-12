import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Kevin's Projects"}</title>
        <meta name="description" content="Kevin Project Page" />
        <link rel="icon" href="/KleanZ.ico" />
      </Head>
      <main className="flex flex-col min-h-screen bg-[#1a237e] text-white p-8 items-center justify-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-8 text-center">
          <Link href={"/"}>
            <span className="text-[#dcdcad] hover:text-[#7d7d61] cursor-pointer shadow-text">{"Kevin's "}</span>
          </Link>
          Projects
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 w-full max-w-3xl">
          <Link
            href="https://github.com/Kevin3874"
            target="_blank"
          >
            <div className="flex flex-col items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 cursor-pointer">
              <h3 className="text-2xl font-bold">Github →</h3>
              <p className="text-lg text-center">
                Link to my public Github repository with all of the projects I have worked on!
              </p>
            </div>
          </Link>
          <Link
            href="https://kevinzhang25.notion.site/kevinzhang25/Kevin-Zhang-80f3a8cf8e704dc4bede040bc411037e"
            target="_blank"
          >
            <div className="flex flex-col items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 cursor-pointer">
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <p className="text-lg text-center">
                Link to my Notion page where I go more in-depth
                about the details of each project!
              </p>
            </div>
          </Link>
        </div>
      </main>
      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 2px #000;
        }
      `}</style>
    </>
  );
};

export default Projects;
