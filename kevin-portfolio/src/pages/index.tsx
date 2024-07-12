import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import initializeScrollHandler from "./scripts/scrollHandler";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [namePlaceholder, setNamePlaceholder] = useState("Enter your name");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Enter your email");
  const [messagePlaceholder, setMessagePlaceholder] = useState(
    "Hi, I would love to learn more about your experiences or skills working on X project or team!"
  );
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    if (!isMobile) {
      const cleanup = initializeScrollHandler(setCurrentPage);
      return cleanup;
    }
  }, [isMobile]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !event.target.name.value ||
      !event.target.email.value ||
      !event.target.message.value
    ) {
      setFormErrors({
        name: !event.target.name.value,
        email: !event.target.email.value,
        message: !event.target.message.value,
      });
      return;
    }

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: event.target.email.value,
        message: event.target.message.value,
        subject: `Portfolio Contact - ${event.target.name.value}`,
      }),
    });

    const data = await response.json();

    if (data.success) {
      toast.success(
        "Email has been sent! I will get back to you as soon as possible!",
        { position: toast.POSITION.TOP_RIGHT }
      );
    } else {
      toast.error("Email could not be sent. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <Head>
        <title>{"Kevin's Portfolio"}</title>
        <meta
          name="description"
          content="Learn more about my skills and experiences!"
        />
        <meta name="author" content="Kevin Zhang" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/KleanZ.ico" />
      </Head>
      <main className={`flex flex-col ${isLoaded ? "animate-fade-in" : ""}`}>
        <section
          id="section1"
          className="md:h-[88vh] flex flex-grow flex-col-reverse md:flex-row"
        >
          <div className="relative order-1 flex w-full flex-col items-center justify-center bg-[#CCD5AE] p-8 text-[#333] md:order-2 md:w-3/5">
            <div className={`mt-24 ${isLoaded ? "animate-slide-in" : ""}`}>
              <h1 className="mb-6 text-center text-5xl font-bold  ">
                About Me:
              </h1>
              <div className="flex h-full flex-col justify-center">
                <p className="mx-auto max-w-lg text-center text-xl">
                  {
                    "I'm a combined BS/MSE student at JHU studying Computer Science. Currently working at Voyce Global as a Software Engineer."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-around pt-20 md:pt-32">
              <p className="mr-12">
                {"I'm highly motivated,"}
                <br /> {"a collaborative worker &"}
                <br />
                {"love learning new things"}
              </p>
              <p className="ml-12">
                {"Proven experience in"}
                <br /> {"multiple projects using an"}
                <br /> {" array of technologies"}
              </p>
            </div>
          </div>
          <div className="order-2 flex w-full flex-col items-center justify-center bg-[#f5f5dc] p-8 py-28 text-[#333] md:order-1">
            <img
              src="https://lh6.googleusercontent.com/EjVF2hhC1YbjDmeqfIsS5cMq1idMpONh8KCWlTuai-avYRjFd9AWGFXvbSqgWtHc44o=w2400"
              alt="My Image"
              className={`mb-8 w-48 rounded-full shadow-lg md:w-72`}
            />
            <h1 className="mb-6 text-center text-6xl font-extrabold md:text-left">
              Kevin Zhang
            </h1>
            <div className="text-center">
              <h2 className="typewriter text-3xl">Fullstack</h2>
              <h2 className="typewriter text-3xl">Software Engineer</h2>
            </div>
          </div>
        </section>
        <section
          id="section2"
          className="animate-fade-in flex min-h-screen flex-col items-center justify-between space-y-8 bg-[#333] p-24 px-4 text-white md:flex-row md:space-y-0"
        >
          <article className="order-1 mx-4 flex flex-col flex-wrap md:order-1 md:mx-0 md:ml-20">
            <h1 className="mb-8 text-5xl font-bold">In the past,</h1>
            <div className="flex flex-col gap-4 md:flex-col">
              <p className="mx-auto mb-2 max-w-lg">
                I have worked on several teams in different fields of Software
                Engineering. Most roles have been in backend development, but I
                have also worked on frontend and mobile development. <br />
                Currently working at:
                {
                  <Link
                    className="link-hover text-[#D4A373]"
                    href="https://web.voyceglobal.com/"
                    target={"_blank"}
                  >
                    {" "}Voyce{" "}
                  </Link>
                }
                and
                {
                  <Link
                    className="link-hover text-[#D4A373]"
                    href="https://briefs.aimply.io/"
                    target={"_blank"}
                  >
                    {" "}Aimply
                  </Link>
                }
              </p>
              <p className="mx-auto mb-2 max-w-lg">
                I also love teaching, and have been a TA for several courses at
                Hopkins. I am currently a Lead CA for Gateway: Python, and a TA 
                for Gen Chem Lab.
              </p>
              <p className="mx-auto mb-2 max-w-lg">
                Some projects I have worked on are: <br /> <br />
                TechStack: A website that scrapes tech products from popular
                sites such as Amazon, Newegg, and BestBuy. I am currently adding
                new features, and plan to hopefully get a permanent server up.<br />
                {
                  <Link
                    className="link-hover text-[#D4A373]"
                    href="https://techstackshop.com"
                    target={"_blank"}
                  >
                    {" "}
                    Check it out!
                  </Link>
                }
              </p>
              <p className="mx-auto mb-2 max-w-lg">
                Flashcard Fighter: A gamefied-flashcard web app that allows you
                to create your own flashcards and battle against other users.<br />
                {
                  <Link
                    className="link-hover text-[#D4A373]"
                    href="https://flashcard-fighter.vercel.app/"
                    target={"_blank"}
                  >
                    {" "}
                    Battle now!
                  </Link>
                }
              </p>
              <p className="mx-auto mb-2 max-w-lg">
                HopDrop: A mobile food delivery app targeted at Hopkins{"'"} students! 
                This is built using react native, and we are currently working on 
                getting it on the app and play stores.<br />
                {
                  <Link
                    className="link-hover text-[#D4A373]"
                    href="https://github.com/Kevin3874/HopDrop-React-Native"
                    target={"_blank"}
                  >
                    {" "}
                    See the source code here!
                  </Link>
                }
              </p>
            </div>
          </article>
          <article className="order-2 mx-4 md:order-2 md:mx-0 md:mr-20">
            <p className="mx-auto mb-2 max-w-lg text-center text-2xl text-[#D4A373]">
              Technical Skills and Technologies:
            </p>
            <p className="mx-auto max-w-lg text-center text-1xl text-[#D4A373]">
              Languages:
            </p>
            <p className="mx-auto mb-2 max-w-lg text-center">
            Python, Java, C#, C/C++
            </p>
            <p className="mx-auto max-w-lg text-center text-1xl text-[#D4A373]">
              Backend Development:
            </p>
            <p className="mx-auto mb-2 max-w-lg text-center">
            Node.js, Express, REST API, Firebase, Socket.io, Microsoft Graph API, Puppeteer
            </p>
            <p className="mx-auto max-w-lg text-center text-1xl text-[#D4A373]">
              Web Development:
            </p>
            <p className="mx-auto mb-2 max-w-lg text-center">
            HTML5, CSS, JavaScript, TypeScript, React.js, Next.js, ASP .NET, Bootstrap
            </p>
            <p className="mx-auto max-w-lg text-center text-1xl text-[#D4A373]">
              Mobile Development:
            </p>
            <p className="mx-auto mb-2 max-w-lg text-center">
            React Native, Android Studio
            </p>
            <p className="mx-auto max-w-lg text-center text-1xl text-[#D4A373]">
              DevOps and Collaboration:
            </p>
            <p className="mx-auto mb-4 max-w-lg text-center">
            Git, Postman, ngrok, OAuth 2.0, HL7 FHIR, Docker
            </p>
            <div className="mb-4 flex flex-wrap justify-center gap-4">
              <Link
                //href="https://kevinzhang25.notion.site/Kevin-s-Resume-Download-1fcf8411f885460cb918ef2b9873cf3b?pvs=4"
                href="https://drive.google.com/file/d/1GvNdp-DH8GlxglWUYtUFaywgS9ZPYoRN/view?usp=sharing"
                target={"_blank"}
              >
                <button className="btn bg-[#D4A373] p-3 text-[#333] hover:bg-[#e5e5cc]">
                  My Resume
                </button>
              </Link>
              <Link href="https://github.com/Kevin3874" target={"_blank"}>
                <button className="btn bg-[#D4A373] p-3 text-[#333] hover:bg-[#e5e5cc]">
                  Github
                </button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kevinzhang25/"
                target={"_blank"}
              >
                <button className="btn bg-[#D4A373] p-3 text-[#333] hover:bg-[#e5e5cc]">
                  LinkedIn
                </button>
              </Link>
            </div>
          </article>
        </section>
        <section
          id="section3"
          className="animate-fade-in flex min-h-screen flex-col justify-between bg-[#f5f5dc]"
        >
          <div className="input-group flex flex-grow flex-col items-center justify-center p-8">
            <h1 className="mb-8 text-center text-5xl font-bold text-[#333]">
              Reach out to me!
            </h1>
            <h2 className="mb-12 text-center text-2xl text-[#333]">
              Want to learn more about me?
              <br />
              Have a project you want to work on?
              <br />
            </h2>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                  <label
                    className="mb-2 block font-bold text-[#333]"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    className={`focus:shadow-outline form-control w-full appearance-none rounded border py-2 px-3 leading-tight text-[#333] focus:outline-none ${
                      formErrors.name ? "border-red-500" : ""
                    }`}
                    id="name"
                    type="text"
                    placeholder={namePlaceholder}
                    required
                    onFocus={() => setNamePlaceholder("")}
                    onBlur={(e) => {
                      if (e.target.value === "")
                        setNamePlaceholder("Enter your name");
                    }}
                  />
                  {formErrors.name && (
                    <p className="text-red-500">Please enter your name</p>
                  )}
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="mb-2 block font-bold text-[#333]"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className={`focus:shadow-outline form-control w-full appearance-none rounded border py-2 px-3 leading-tight text-[#333] focus:outline-none ${
                      formErrors.email ? "border-red-500" : ""
                    }`}
                    id="email"
                    type="text"
                    placeholder={emailPlaceholder}
                    required
                    onFocus={() => setEmailPlaceholder("")}
                    onBlur={(e) => {
                      if (e.target.value === "")
                        setEmailPlaceholder("Enter your email");
                    }}
                  />
                  {formErrors.email && (
                    <p className="text-red-500">Please enter your email</p>
                  )}
                </div>
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-bold text-[#333]"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  className={`focus:shadow-outline form-control w-full appearance-none rounded border py-2 px-3 leading-tight text-[#333] focus:outline-none ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                  id="message"
                  placeholder={messagePlaceholder}
                  required
                  onFocus={() => setMessagePlaceholder("")}
                  onBlur={(e) => {
                    if (e.target.value === "")
                      setMessagePlaceholder(
                        "Hi, I would love to learn more about your experiences or skills working on X project or team!"
                      );
                  }}
                />
                {formErrors.message && (
                  <p className="text-red-500">Please enter your message</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button className="button" type="submit">
                  Send Message
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
          <footer className="bg-[#CCD5AE] p-4 text-center text-[#333]">
            <div className="mx-auto max-w-2xl">
              <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-around">
                <div className="mb-4 flex flex-col items-center sm:mb-0">
                  <span className="footer-title text-[#333]">Email</span>
                  <a className="text">zzsshwkevin@gmail.com</a>
                  <a className="text">kzhang77@jh.edu</a>
                </div>
                <div className="mb-4 flex flex-col items-center sm:mb-0">
                  <span className="footer-title text-[#333]">Phone & Cell</span>
                  <a className="text">{"(813) 842- 6045"}</a>
                </div>
              </div>
            </div>
          </footer>
        </section>
        {!isMobile && (
          <nav className="fixed bottom-4 right-4 flex flex-col space-y-2">
            <div
              className={`h-4 w-4 cursor-pointer rounded-full ${
                currentPage >= 1 ? "bg-[#D4A373]" : "bg-white"
              }`}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                void setCurrentPage(1);
              }}
            ></div>
            <div
              className={`h-4 w-4 cursor-pointer rounded-full ${
                currentPage >= 2 ? "bg-[#D4A373]" : "bg-white"
              }`}
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("section2")!.offsetTop,
                  behavior: "smooth",
                });
                void setCurrentPage(2);
              }}
            ></div>
            <div
              className={`h-4 w-4 cursor-pointer rounded-full ${
                currentPage === 3 ? "bg-[#D4A373]" : "bg-white"
              }`}
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("section3")!.offsetTop,
                  behavior: "smooth",
                });
                void setCurrentPage(3);
              }}
            ></div>
          </nav>
        )}
      </main>
    </>
  );
};

export default Home;
