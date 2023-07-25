import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from 'react';
import initializeScrollHandler from './scripts/scrollHandler';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [namePlaceholder, setNamePlaceholder] = useState("Enter your name");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Enter your email");
  const [messagePlaceholder, setMessagePlaceholder] = useState("Hi, I would love to learn more about your experiences or skills working on X project or team!");
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
    if (!event.target.name.value || !event.target.email.value || !event.target.message.value) {
      setFormErrors({
        name: !event.target.name.value,
        email: !event.target.email.value,
        message: !event.target.message.value,
      });
      return;
    }

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: event.target.email.value,
        message: event.target.message.value,
        subject: `Portfolio Contact - ${event.target.name.value}`,
      }),
    });
  
    const data = await response.json();
  
    if (data.success) {
      toast.success('Email has been sent! I will get back to you as soon as possible!', { position: toast.POSITION.TOP_RIGHT });
    } else {
      toast.error('Email could not be sent. Please try again later.', { position: toast.POSITION.TOP_RIGHT });
    }
  };
  
  return (
    <>
      <Head>
        <title>{"Kevin's Portfolio"}</title>
        <meta name="description" content="Learn more about my skills and experiences!" />
        <meta name="author" content="Kevin Zhang" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/KleanZ.ico" />
      </Head>
      <main className={`flex flex-col ${isLoaded ? 'animate-fade-in' : ''}`}>
        <section id="section1" className="flex-grow flex flex-col-reverse md:flex-row">
          <div className="order-1 md:order-2 w-full md:w-3/5 bg-[#CCD5AE] flex flex-col items-center justify-center text-[#333] p-8 relative">
            <div className={`mt-24 ${isLoaded ? 'animate-slide-in' : ''}`}> 
              <h1 className="text-5xl font-bold text-center mb-6  ">About Me</h1>
              <div className="flex flex-col justify-center h-full">
                <p className="text-xl text-center max-w-lg mx-auto">{"I'm a rising Junior at JHU studying Computer Science with a minor in Applied Mathematics & Statistics. Currently working at Voyce Global as a Software Engineer."}</p>
              </div>
            </div>
            <div className="flex flex-row pt-32 items-center justify-around">
              <p className="mr-12">{"I'm highly motivated,"}<br /> {"a collaborative worker &"}<br />{"love learning new things"}</p>
              <p className="ml-12">{"Proven experience in"}<br /> {"multiple projects using an"}<br /> {" array of technologies"}</p>
            </div>
          </div>
            <div className="order-2 md:order-1 w-full md:w-2/5 bg-[#f5f5dc] flex flex-col items-center justify-center text-[#333] p-8 py-28">
              <img src="https://lh6.googleusercontent.com/EjVF2hhC1YbjDmeqfIsS5cMq1idMpONh8KCWlTuai-avYRjFd9AWGFXvbSqgWtHc44o=w2400" alt="My Image"
                className={`w-48 md:w-72 mb-8 rounded-full shadow-lg`}/>
              <h1 className="text-6xl font-extrabold mb-4 text-center md:text-left">Kevin Zhang</h1>
              <div className="text-center">
                <h2 className="text-3xl typewriter">Fullstack</h2>
                <h2 className="text-3xl typewriter">Software Engineer</h2>
              </div>
            </div>
        </section>
        <section id="section2" className="bg-[#333] min-h-screen flex flex-col md:flex-row justify-between items-center text-white px-4 p-24 space-y-8 md:space-y-0 animate-fade-in">
          <article className="order-1 md:order-1 flex flex-wrap flex-col mx-4 md:mx-0 md:ml-20">
            <h1 className="text-5xl font-bold mb-8">In the past,</h1>
            <div className="flex flex-col md:flex-col gap-4">
              <p className="max-w-lg mx-auto mb-2">I have worked on several teams in different fields of Software Engineering: 
              from Web development, Android app development, and React Native development. Currently, my role focuses primarily 
              on .NET Backend integration efforts.</p>
              <p className="max-w-lg mx-auto mb-2">
              I started off my journey with a startup called Quest2Learn. Initially, I joined as the Content Manager and Data Analyst, 
              designing, creating, and testing modules. However, my Sophomore year in college, after I transitioned to studying Computer Science,
              my role shifted into a Web Developer, and eventually, a Team Lead. You can check out more about Quest2Learn
                {<Link className="text-[#D4A373] link-hover" href="https://www.q2l.app/" target={"_blank"}> here.</Link>}</p>
              <p className="max-w-lg mx-auto mb-2">
              During that time, I became a Python CA for Hopkin&apos;s Gateway course. I was responsible for holding office hours,
              grading assignments, and helping students with their projects. I also joined a team called HopDrop, which focuses
              on creating a mobile app for Hopkins students to get their Mobile Orders delivered to them on campus.
              We started off as an Android app, and I am still curently working on the React Native version of the app.
              You can check out more about HopDrop {<Link className="text-[#D4A373] link-hover" href="https://github.com/Kevin3874/HopDrop-React-Native" target={"_blank"}> here.</Link>}</p>
            </div>
          </article>
          <article className="order-2 md:order-2 mx-4 md:mx-0 md:mr-20">
            <p className="text-2xl text-center max-w-lg mx-auto mb-2 text-[#D4A373]">Languages:</p>
            <p className="text-center max-w-lg mx-auto mb-2">Python · Java · C/C++ · JavaScript/TypeScript · HTML5 & CSS · C#</p>
            <p className="text-2xl text-center max-w-lg mx-auto mb-2 text-[#D4A373]">Technologies:</p>
            <p className="text-center max-w-lg mx-auto mb-4">Firebase · .NET · React.js · React Native · Next.js · Git · Node.js · Azure</p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <Link href="https://kevinzhang25.notion.site/Kevin-s-Resume-Download-1fcf8411f885460cb918ef2b9873cf3b?pvs=4" target={"_blank"}>
                <button className="btn bg-[#D4A373] p-3 text-[#333] hover:bg-[#e5e5cc]">My Resume</button>
              </Link>
              <Link href="https://github.com/Kevin3874" target={"_blank"}>
                <button className="btn bg-[#D4A373] p-3 text-[#333] hover:bg-[#e5e5cc]">Github</button>
              </Link>
              <Link href="https://www.linkedin.com/in/kevinzhang25/" target={"_blank"}>
                <button className="btn bg-[#D4A373] p-3 text-[#333] hover:bg-[#e5e5cc]">LinkedIn</button>
              </Link>
            </div>
          </article>
        </section>
        <section id="section3" className="min-h-screen flex flex-col justify-between bg-[#f5f5dc] animate-fade-in">
          <div className="input-group flex-grow flex flex-col items-center justify-center p-8">
            <h1 className="text-5xl font-bold text-center mb-8 text-[#333]">Reach out to me!</h1>
            <h2 className="text-2xl text-center mb-12 text-[#333]">
              Want to learn more about me?<br />
              Have a project you want to work on?<br />
            </h2>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block text-[#333] font-bold mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className={`form-control appearance-none border rounded w-full py-2 px-3 text-[#333] leading-tight focus:outline-none focus:shadow-outline ${formErrors.name ? 'border-red-500' : ''}`}
                    id="name" type="text" placeholder={namePlaceholder}
                    required
                    onFocus={() => setNamePlaceholder('')}
                    onBlur={(e) => { if (e.target.value === '') setNamePlaceholder('Enter your name'); }}
                  />
                  {formErrors.name && <p className="text-red-500">Please enter your name</p>}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-[#333] font-bold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className={`form-control appearance-none border rounded w-full py-2 px-3 text-[#333] leading-tight focus:outline-none focus:shadow-outline ${formErrors.email ? 'border-red-500' : ''}`}
                    id="email" type="text" placeholder={emailPlaceholder}
                    required
                    onFocus={() => setEmailPlaceholder('')}
                    onBlur={(e) => { if (e.target.value === '') setEmailPlaceholder('Enter your email'); }}
                  />
                  {formErrors.email && <p className="text-red-500">Please enter your email</p>}
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-[#333] font-bold mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className={`form-control appearance-none border rounded w-full py-2 px-3 text-[#333] leading-tight focus:outline-none focus:shadow-outline ${formErrors.message ? 'border-red-500' : ''}`}
                  id="message" placeholder={messagePlaceholder}
                  required
                  onFocus={() => setMessagePlaceholder('')}
                  onBlur={(e) => { if (e.target.value === '') setMessagePlaceholder('Hi, I would love to learn more about your experiences or skills working on X project or team!'); }}
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
          <footer className="bg-[#CCD5AE] text-[#333] p-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center">
                <div className="flex flex-col items-center mb-4 sm:mb-0">
                  <span className="footer-title text-[#333]">Email</span>
                  <a className="text">zzsshwkevin@gmail.com</a>
                  <a className="text">kzhang77@jh.edu</a>
                </div>
                <div className="flex flex-col items-center mb-4 sm:mb-0">
                  <span className="footer-title text-[#333]">Phone & Cell</span>
                  <a className="text">{"(813) 842- 6045"}</a>
                </div>
              </div>
            </div>
          </footer>
        </section>
        {!isMobile && (
          <nav className="fixed bottom-4 right-4 flex flex-col space-y-2">
            <div className={`h-4 w-4 rounded-full cursor-pointer ${currentPage >= 1 ? 'bg-[#D4A373]' : 'bg-white'}`} onClick={() => {
              window.scrollTo({top: 0, behavior: 'smooth'});
              void setCurrentPage(1);
            }}></div>
            <div className={`h-4 w-4 rounded-full cursor-pointer ${currentPage >= 2 ? 'bg-[#D4A373]' : 'bg-white'}`} onClick={() => {
              window.scrollTo({top: document.getElementById('section2')!.offsetTop, behavior: 'smooth'});
              void setCurrentPage(2);
            }}></div>
            <div className={`h-4 w-4 rounded-full cursor-pointer ${currentPage === 3 ? 'bg-[#D4A373]' : 'bg-white'}`} onClick={() => {
              window.scrollTo({top: document.getElementById('section3')!.offsetTop, behavior: 'smooth'});
              void setCurrentPage(3);
            }}></div>
        </nav>
        )}
      </main>
    </>
  );
          };

  export default Home;