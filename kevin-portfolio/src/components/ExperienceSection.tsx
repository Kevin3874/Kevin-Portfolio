import Link from "next/link";
import { siteContent } from "~/data/content";

export default function ExperienceSection() {
  const { experience, workExperience, skills } = siteContent;

  return (
    <section
      id="section2"
      className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 px-6 py-16 md:flex-row md:items-center md:gap-16 md:px-20 lg:px-32"
    >
      {/* Left: background + skills — 40% */}
      <div className="mb-12 w-full md:mb-0 md:flex-[2]">
        <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-400">
          Background
        </h2>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-zinc-100">
          {experience.headline}
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-zinc-400">{experience.body}</p>

        <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-400">
          Skills
        </h2>
        <p className="mb-4 text-2xl font-extrabold tracking-tight text-zinc-100">Tech Stack</p>
        <div className="space-y-4">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-zinc-500">
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

      {/* Right: work experience cards — 60% */}
      <div className="min-w-0 md:flex-[3]">
        <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-400">
          Experience
        </h2>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-zinc-100">
          {"Where I've worked"}
        </h1>
        <div className="flex flex-col gap-2">
          {workExperience.map((job) => {
            const inner = (
              <div className="group flex items-start justify-between rounded-xl bg-zinc-800 p-3 ring-1 ring-zinc-700 transition-all hover:ring-blue-500/50">
                <div className="min-w-0">
                  <div className="mb-0.5 flex flex-wrap items-baseline gap-2">
                    <h4 className="font-semibold text-zinc-100 transition-colors group-hover:text-blue-400">
                      {job.company}
                    </h4>
                    <span className="text-xs text-zinc-500">{job.period}</span>
                  </div>
                  <p className="mb-1.5 text-xs font-medium text-zinc-400">{job.role}</p>
                  <p className="line-clamp-2 text-xs leading-relaxed text-zinc-500">
                    {job.highlight}
                  </p>
                </div>
                {job.url && (
                  <span className="ml-3 mt-0.5 flex-shrink-0 text-zinc-600 transition-colors group-hover:text-blue-400">
                    ↗
                  </span>
                )}
              </div>
            );

            return job.url ? (
              <Link key={job.company} href={job.url} target="_blank" rel="noopener noreferrer">
                {inner}
              </Link>
            ) : (
              <div key={job.company}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
