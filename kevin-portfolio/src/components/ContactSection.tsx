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
      toast.success("Sent! I'll get back to you soon.", { position: "top-right" });
      form.reset();
      setFormErrors({ name: false, email: false, message: false });
    } else {
      toast.error("Could not send. Please try again later.", { position: "top-right" });
    }
  };

  return (
    <section
      id="section3"
      className="flex flex-col justify-between bg-zinc-950 lg:min-h-screen"
    >
      <div className="flex flex-col items-center justify-center px-6 pb-12 pt-20 lg:flex-1 lg:pt-24">
        <div className="w-full max-w-lg">
          <h2 className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-blue-400">
            Get in touch
          </h2>
          <h1 className="mb-3 text-center text-4xl font-extrabold tracking-tight text-zinc-100">
            {contact.headline}
          </h1>
          <p className="mb-10 text-center text-zinc-400">
            {contact.subtext.join(" ")}
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  className="mb-1.5 block text-sm font-medium text-zinc-300"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className={`form-control ${formErrors.name ? "border-red-500" : ""}`}
                  required
                />
                {formErrors.name && (
                  <p className="mt-1 text-xs text-red-400">Required</p>
                )}
              </div>
              <div>
                <label
                  className="mb-1.5 block text-sm font-medium text-zinc-300"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={`form-control ${formErrors.email ? "border-red-500" : ""}`}
                  required
                />
                {formErrors.email && (
                  <p className="mt-1 text-xs text-red-400">Required</p>
                )}
              </div>
            </div>
            <div>
              <label
                className="mb-1.5 block text-sm font-medium text-zinc-300"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi, I'd love to connect!"
                className={`form-control ${formErrors.message ? "border-red-500" : ""}`}
                required
              />
              {formErrors.message && (
                <p className="mt-1 text-xs text-red-400">Required</p>
              )}
            </div>
            <button className="button w-full" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <ToastContainer theme="dark" />
      </div>
      <Footer />
    </section>
  );
}
