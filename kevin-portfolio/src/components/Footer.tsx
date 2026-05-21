import { siteContent } from "~/data/content";

export default function Footer() {
  const { contact } = siteContent;

  return (
    <footer className="bg-[#CCD5AE] p-4 text-center text-[#333]">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-around">
          <div className="mb-4 flex flex-col items-center sm:mb-0">
            <span className="footer-title text-[#333]">Email</span>
            <a>{contact.email}</a>
          </div>
          <div className="mb-4 flex flex-col items-center sm:mb-0">
            <span className="footer-title text-[#333]">Phone</span>
            <a>{contact.phone}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
