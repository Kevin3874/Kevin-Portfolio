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
      <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 py-20 text-white">
        <div className="w-full max-w-3xl">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
              Portfolio
            </span>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-zinc-100">
              <Link href="/">
                <span className="cursor-pointer transition-colors hover:text-blue-400">
                  {"Kevin's "}
                </span>
              </Link>
              Projects
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            {projects.map((project) => (
              <Link key={project.name} href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="group flex h-full cursor-pointer flex-col justify-between rounded-xl bg-zinc-900 p-5 ring-1 ring-zinc-800 transition-all hover:ring-blue-500/50">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-zinc-100 transition-colors group-hover:text-blue-400">
                      {project.name} →
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
            <Link href={links.github} target="_blank" rel="noopener noreferrer">
              <div className="group flex h-full cursor-pointer flex-col justify-between rounded-xl bg-zinc-900 p-5 ring-1 ring-zinc-800 transition-all hover:ring-blue-500/50">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-100 transition-colors group-hover:text-blue-400">
                    GitHub →
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    All my public repositories.
                  </p>
                </div>
              </div>
            </Link>
            <Link href={links.notion} target="_blank" rel="noopener noreferrer">
              <div className="group flex h-full cursor-pointer flex-col justify-between rounded-xl bg-zinc-900 p-5 ring-1 ring-zinc-800 transition-all hover:ring-blue-500/50">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-100 transition-colors group-hover:text-blue-400">
                    Documentation →
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Deeper write-ups on each project.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
