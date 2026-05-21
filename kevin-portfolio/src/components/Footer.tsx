import { siteContent } from "~/data/content";

export default function Footer() {
  const { contact } = siteContent;

  return (
    <footer className="border-t border-zinc-800 px-6 py-6">
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 text-center sm:flex-row sm:justify-around">
        <div>
          <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Email
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="text-sm text-zinc-400 transition-colors hover:text-blue-400"
          >
            {contact.email}
          </a>
        </div>
        <div>
          <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Phone
          </p>
          <p className="text-sm text-zinc-400">{contact.phone}</p>
        </div>
      </div>
    </footer>
  );
}
