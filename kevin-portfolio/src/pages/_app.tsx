import { type AppType } from "next/dist/shared/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
};

export default MyApp;
