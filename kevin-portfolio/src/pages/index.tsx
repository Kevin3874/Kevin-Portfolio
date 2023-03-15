import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Kevin's Porfolio"}</title>
        <meta name="description" content="Learn more about my experiences and projects!" />
        <meta name="author" content="Kevin Zhang" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/KleanZ.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center justify-between bg-gradient-to-b from-[#2a023f] to-[#1f4186]">
        <div className="container flex flex-col items-center justify-center px-10 py-16 gap-10">
          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            {"Hi, I'm Kevin"}
          </h1>
          <div className="hero bg-base">
            <div className="hero-content flex-col lg:flex-row max-w-5xl">
              <img src="https://lh6.googleusercontent.com/EjVF2hhC1YbjDmeqfIsS5cMq1idMpONh8KCWlTuai-avYRjFd9AWGFXvbSqgWtHc44o=w2400" alt = "My Image"
              className="max-w-24 max-h-72"/>            
              <div>
                <h1 className="text-4xl font-bold text-white">About Me</h1>
                <p className="pt-1 text-white">{"I'm a current Johns Hopkins Undergraduate studying a B.S. in Computer Science and a minor in Applied Mathematics & Statistics. I hope to continue my education by pursuing Hopkin's combined BS/MSE 4 year program."}</p>
                <p className="pt-3 text-white">{"Some Languages I know:"}</p>
                <p className="text-white">{"Python · Java · C/C++ · JavaScript · HTML/CSS · SQL "}</p>
                <p className="pt-3 text-white">{"Technologies:"}</p>
                <p className="pb-3 text-white">{"Firebase · React · MySQL · Next.js · Android Studio · Git "}</p>
                <Link href = "https://kevinzhang25.notion.site/Resume-Download-1fcf8411f885460cb918ef2b9873cf3b" 
                target={"_blank"}>
                <button className="btn bg-[#2b46aa] p-4 text-white hover:bg-white/20">My Resume</button>
                </Link>
                <Link href ="mailto:kzhang77@jh.edu"
                target={"_blank"}>
                <button className="btn bg-[#2b46aa] p-4 text-white hover:bg-white/20 ml-5">Email Me</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container flex flex-row itmes-center justify-center">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="projects">
              <h3 className="text-2xl font-bold">Check out my projects →</h3>
              <div className="text-lg">
                Learn more about the teams and projects I have been invoved in.
              </div>
            </Link>
          </div>
        </div>
        <footer className="footer p-12 bg-neutral text-neutral-content gap-12 justify-center text-center bg-gradient-to-b from-[#020d4b] to-[#02054b] h-28">
          <div className = "-translate-y-8 -translate-x-8 flex flex-col items-center">
            <span className="footer-title">Email</span> 
            <a className="text">zzsshwkevin@gmail.com</a>
            <a className="text">kzhang77@jh.edu</a>
          </div> 
          <div className = "-translate-y-8 -translate-x-8 flex flex-col items-center">
            <span className="footer-title">Phone & Cell</span> 
            <a className="text">{"(813) 842- 6045"}</a>
          </div> 
          <div className = "-translate-y-8 -translate-x-8 flex flex-col items-center">
            <span className="footer-title">LinkedIn</span> 
            <Link href = "https://www.linkedin.com/in/kevinzhang25/"
            target={"_blank"}>
              <button className="link link-hover">Kevin Zhang</button>
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
