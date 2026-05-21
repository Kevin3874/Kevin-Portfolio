import Link from "next/link";
import { siteContent } from "~/data/content";

export default function ExperienceSection() {
  const { experience, projects, skills } = siteContent;

  return (
    <section
      id="section2"
      className="flex min-h-screen flex-col bg-zinc-900 px-6 py-24 md:flex-row md:items-start md:justify-center md:gap-16 md:px-20 lg:px-32"
    >
      {/* Left: experience + project cards */}
      <div className="mb-16 max-w-lg flex-1 md:mb-0">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
          Background
        </h2>
        <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-zinc-100">
          {experience.headline}
        </h1>
        <p className="mb-8 leading-relaxed text-zinc-400">{experience.body}</p>

        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
          Projects
        </h3>
        <div className="flex flex-col gap-3">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between rounded-xl bg-zinc-800 p-4 ring-1 ring-zinc-700 transition-all hover:ring-blue-500/50"
            >
              <div>
                <h4 className="mb-1 font-semibold text-zinc-100 transition-colors group-hover:text-blue-400">
                  {project.name}
                </h4>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
              </div>
              <span className="ml-4 mt-0.5 flex-shrink-0 text-zinc-600 transition-colors group-hover:text-blue-400">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Right: skills */}
      <div className="w-full md:w-72 md:flex-shrink-0">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
          Skills
        </h2>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-zinc-100">
          Tech Stack
        </h1>
        <div className="space-y-5">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300 ring-1 ring-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
