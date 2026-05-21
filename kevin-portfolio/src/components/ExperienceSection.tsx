import Link from "next/link";
import { siteContent } from "~/data/content";

export default function ExperienceSection() {
  const { experience, projects, skills, links } = siteContent;

  return (
    <section
      id="section2"
      className="animate-fade-in flex min-h-screen flex-col items-center justify-between space-y-8 bg-[#333] p-24 px-4 text-white md:flex-row md:space-y-0"
    >
      {/* Left: experience + projects */}
      <article className="order-1 mx-4 flex flex-col flex-wrap md:mx-0 md:ml-20">
        <h1 className="mb-8 text-5xl font-bold">{experience.headline}</h1>
        <div className="flex flex-col gap-4">
          <p className="mx-auto mb-2 max-w-lg">{experience.body}</p>
          {projects.map((project) => (
            <p key={project.name} className="mx-auto mb-2 max-w-lg">
              <strong>{project.name}:</strong> {project.description}
              <br />
              <Link
                className="link-hover text-[#D4A373]"
                href={project.url}
                target="_blank"
              >
                {" "}
                {project.linkLabel}
              </Link>
            </p>
          ))}
        </div>
      </article>

      {/* Right: skills + links */}
      <article className="order-2 mx-4 md:mx-0 md:mr-20">
        <p className="mx-auto mb-2 max-w-lg text-center text-2xl text-[#D4A373]">
          Technical Skills and Technologies:
        </p>
        {skills.map(({ category, items }) => (
          <div key={category}>
            <p className="mx-auto max-w-lg text-center text-[#D4A373]">{category}:</p>
            <p className="mx-auto mb-2 max-w-lg text-center">{items.join(", ")}</p>
          </div>
        ))}
        <div className="mb-4 mt-4 flex flex-wrap justify-center gap-4">
          <Link href={links.resume} target="_blank">
            <button className="btn bg-[#D4A373] p-3 text-[#333] hover:bg-[#e5e5cc]">
              My Resume
            </button>
          </Link>
          <Link href={links.github} target="_blank">
            <button className="btn bg-[#D4A373] p-3 text-[#333] hover:bg-[#e5e5cc]">
              Github
            </button>
          </Link>
          <Link href={links.linkedin} target="_blank">
            <button className="btn bg-[#D4A373] p-3 text-[#333] hover:bg-[#e5e5cc]">
              LinkedIn
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
}
