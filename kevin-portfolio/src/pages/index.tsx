import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Kevin's Porfolio"}</title>
        <meta name="description" content="Kevin Zhang Portfolio" />
        <link rel="icon" href="/KleanZ.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2a023f] to-[#052460]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Welcome To 
            <span> {"Kevin's"} </span> 
            Portfolio
          </h1>
          <div className="hero bg-base">
            <div className="hero-content flex-col lg:flex-row">
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/558f9c74-18ab-43b7-bbbf-2e14231c6e19/1645761961416.jfif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230307T055341Z&X-Amz-Expires=86400&X-Amz-Signature=ff5665655d6161306858666629a8528dbb7e67aa06df9ecfdb39fd7d7caea2a9&X-Amz-SignedHeaders=host&x-id=GetObject" />            
              <div>
                <h1 className="text-5xl font-bold text-white">About Me</h1>
                <p className="py-6 text-white">{"Hello, I'm a current Johns Hopkins Undergraduate studying a B.S. in Computer Science and a minor in both Applied Mathematics & Statistics and Computer Integrated Surgery. I hope to continue my education by pursuing Hopkin's combined BS/MSE program in 4 years."}</p>
                <Link href = "https://kevinzhang25.notion.site/Resume-Download-1fcf8411f885460cb918ef2b9873cf3b" 
                target={"_blank"}>
                <button className="btn bg-[#18784e] p-4 text-white hover:bg-white/20">My Resume</button>
                </Link>
                <Link href ="mailto:kzhang77@jh.edu"
                target={"_blank"}>
                <button className="btn bg-[#18784e] p-4 text-white hover:bg-white/20 ml-5">Contact Me</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container flex flex-row itmes-center justify-center">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="projects"
            >
              <h3 className="text-2xl font-bold">Check out my projects →</h3>
              <div className="text-lg">
                Learn more about the teams and projects I have been invoved in.
              </div>
            </Link>
          </div>
      </div>
      <footer className="footer p-10 bg-neutral text-neutral-content flex justify-center text-center bg-gradient-to-b from-[#020d4b] to-[#02054b]">
        <div>
        <span className="footer-title">Socials</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                </path>
              </svg>
            </a> 
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
                </path>
              </svg>
            </a> 
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
};

export default Home;
