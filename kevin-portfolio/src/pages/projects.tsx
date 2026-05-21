import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { siteContent } from "~/data/content";

const Projects: NextPage = () => {
  const { projects, links } = siteContent;

  return (
    <>
      <Head>
        <title>{"Kevin's Projects"}</title>
        <meta name="description" content="Kevin's project showcase" />
        <link rel="icon" href="/KleanZ.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#1a237e] p-8 text-white">
        <h1 className="mb-8 text-center text-5xl font-extrabold tracking-tight">
          <Link href="/">
            <span className="cursor-pointer text-[#dcdcad] hover:text-[#7d7d61]">
              {"Kevin's "}
            </span>
          </Link>
          Projects
        </h1>
        <div className="mb-8 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <Link key={project.name} href={project.url} target="_blank">
              <div className="flex cursor-pointer flex-col items-center gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20">
                <h3 className="text-2xl font-bold">{project.name} →</h3>
                <p className="text-center text-lg">{project.description}</p>
              </div>
            </Link>
          ))}
          <Link href={links.github} target="_blank">
            <div className="flex cursor-pointer flex-col items-center gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20">
              <h3 className="text-2xl font-bold">Github →</h3>
              <p className="text-center text-lg">All my public projects on GitHub.</p>
            </div>
          </Link>
          <Link href={links.notion} target="_blank">
            <div className="flex cursor-pointer flex-col items-center gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20">
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <p className="text-center text-lg">
                Notion page with deeper write-ups on each project.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Projects;
