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
          <div className="order-2 md:order-1 w-full md:w-2/5 bg-[#f5f5dc] flex flex-col items-center justify-center text-[#333] p-8">
            <img src="https://lh6.googleusercontent.com/EjVF2hhC1YbjDmeqfIsS5cMq1idMpONh8KCWlTuai-avYRjFd9AWGFXvbSqgWtHc44o=w2400" alt="My Image"
               className={`w-48 md:w-72 mb-8 rounded-full shadow-lg`}/>
            <h1 className="text-5xl font-extrabold mb-4">Kevin Zhang</h1>
            <div className="text-center">
              <h2 className="text-3xl typewriter">Fullstack</h2>
              <h2 className="text-3xl typewriter">Software Engineer</h2>
            </div>
          </div>
        </div>
        <footer className="bg-white text-[#333] p-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center">
              <div className="flex flex-col items-center mb-4 sm:mb-0">
                <span className="footer-title">Email</span>
                <a className="text">zzsshwkevin@gmail.com</a>
                <a className="text">kzhang77@jh.edu</a>
              </div>
              <div className="flex flex-col items-center mb-4 sm:mb-0">
                <span className="footer-title">Phone & Cell</span>
                <a className="text">{"(813) 842- 6045"}</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;