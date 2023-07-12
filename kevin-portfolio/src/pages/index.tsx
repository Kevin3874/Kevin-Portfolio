import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <>
      <Head>
        <title>{"Kevin's Portfolio"}</title>
        <meta name="description" content="Learn more about my experiences and projects!" />
        <meta name="author" content="Kevin Zhang" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/KleanZ.ico" />
      </Head>
      <main className={`flex flex-col min-h-screen ${isLoaded ? 'animate-fade-in' : ''}`}>
        <div className="flex-grow flex flex-col-reverse md:flex-row">
          <div className="order-1 md:order-2 w-full md:w-3/5 bg-[#1a237e] flex flex-col items-center justify-center text-white p-8 relative">
            <div className={isLoaded ? 'animate-slide-in' : ''}>
              <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
              <p className="mb-4 text-center max-w-lg mx-auto">{"I'm a current Johns Hopkins Undergraduate studying a B.S. in Computer Science and a minor in Applied Mathematics & Statistics. I hope to continue my education by pursuing Hopkin's combined BS/MSE 4 year program."}</p>
            </div>
            <p className="mb-2 text-center max-w-lg mx-auto">{"Some Languages I know:"}</p>
            <p className="mb-2 text-center max-w-lg mx-auto">{"Python · Java · C/C++ · JavaScript/TypeScript · Rust · C# "}</p>
            <p className="mb-2 text-center max-w-lg mx-auto">{"Technologies:"}</p>
            <p className="mb-4 text-center max-w-lg mx-auto">{"Firebase · React.js · React Native · Next.js · Git · Node.js · Azure DevOps · Angular 6"}</p>
            <div className="flex gap-4 mb-4">
              <Link href="https://kevinzhang25.notion.site/Resume-Download-1fcf8411f885460cb918ef2b9873cf3b"
                    target={"_blank"}>
                <button className="btn bg-[#f5f5dc] p-3 text-[#333] hover:bg-[#e5e5cc]">My Resume</button>
              </Link>
              <Link href="https://github.com/Kevin3874"
                    target={"_blank"}>
                <button className="btn bg-[#f5f5dc] p-3 text-[#333] hover:bg-[#e5e5cc]">Github</button>
              </Link>
            </div>
            <div className="flex justify-center">
            <Link href="https://www.linkedin.com/in/kevinzhang25/"
                    target={"_blank"}>
                <button className="btn bg-[#f5f5dc] p-3 text-[#333] hover:bg-[#e5e5cc]">LinkedIn</button>
              </Link>
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
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 3s;
        }
        .animate-slide-in {
          animation: slideIn 3s;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .typewriter {
          overflow: hidden;
          border-right: .15em solid orange;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: .15em;
          animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: orange; }
        }
      `}</style>
    </>
  );
};

export default Home;
