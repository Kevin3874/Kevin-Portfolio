import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Kevin's Projects"}</title>
        <meta name="description" content="Kevin Project Page" />
        <link rel="icon" href="/KleanZ.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <Link href = {"/"}>
              <span className="text-[hsl(280,100%,70%)]"> {"Kevin's"} </span>
            </Link>
            Projects
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://github.com/Kevin3874"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Github →</h3>
              <div className="text-lg">
                Link to my public Github repository with all of the projects I have worked on!
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://kevinzhang25.notion.site/kevinzhang25/Kevin-Zhang-80f3a8cf8e704dc4bede040bc411037e"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Link to my public Notion page where I go more in-depth
                about the details of each project!
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://Q2L.app"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Quest2Learn →</h3>
              <div className="text-lg">
                Check out Quest2Learn! I am currently the Content and 
                Research team leader as well as the Developer 
                for the team's website.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
