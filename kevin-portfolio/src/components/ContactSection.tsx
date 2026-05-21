import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "~/components/Footer";
import { siteContent } from "~/data/content";

export default function ContactSection() {
  const { contact } = siteContent;
  const [formErrors, setFormErrors] = useState({ name: false, email: false, message: false });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nameEl = form.elements.namedItem("name") as HTMLInputElement;
    const emailEl = form.elements.namedItem("email") as HTMLInputElement;
    const messageEl = form.elements.namedItem("message") as HTMLTextAreaElement;

    if (!nameEl.value || !emailEl.value || !messageEl.value) {
      setFormErrors({
        name: !nameEl.value,
        email: !emailEl.value,
        message: !messageEl.value,
      });
      return;
    }

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailEl.value,
        message: messageEl.value,
        subject: `Portfolio Contact - ${nameEl.value}`,
      }),
    });

    const data = (await response.json()) as { success: boolean };

    if (data.success) {
      toast.success("Email sent! I'll get back to you soon.", { position: "top-right" });
      form.reset();
      setFormErrors({ name: false, email: false, message: false });
    } else {
      toast.error("Email could not be sent. Please try again later.", { position: "top-right" });
    }
  };

  return (
    <section
      id="section3"
      className="animate-fade-in flex min-h-screen flex-col justify-between bg-[#f5f5dc]"
    >
      <div className="input-group flex flex-grow flex-col items-center justify-center p-8">
        <h1 className="mb-8 text-center text-5xl font-bold text-[#333]">{contact.headline}</h1>
        <h2 className="mb-12 text-center text-2xl text-[#333]">
          {contact.subtext.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label className="mb-2 block font-bold text-[#333]" htmlFor="name">
                Your Name
              </label>
              <input
                className={`form-control focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-[#333] focus:outline-none ${
                  formErrors.name ? "border-red-500" : ""
                }`}
                id="name"
                type="text"
                placeholder="Enter your name"
                required
              />
              {formErrors.name && <p className="text-red-500">Please enter your name</p>}
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label className="mb-2 block font-bold text-[#333]" htmlFor="email">
                Email Address
              </label>
              <input
                className={`form-control focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-[#333] focus:outline-none ${
                  formErrors.email ? "border-red-500" : ""
                }`}
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
              {formErrors.email && <p className="text-red-500">Please enter your email</p>}
            </div>
          </div>
          <div className="mb-6">
            <label className="mb-2 block font-bold text-[#333]" htmlFor="message">
              Your Message
            </label>
            <textarea
              className={`form-control focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-[#333] focus:outline-none ${
                formErrors.message ? "border-red-500" : ""
              }`}
              id="message"
              placeholder="Hi, I'd love to connect!"
              required
            />
            {formErrors.message && <p className="text-red-500">Please enter your message</p>}
          </div>
          <div className="flex items-center justify-between">
            <button className="button" type="submit">
              Send Message
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
      <Footer />
    </section>
  );
}
