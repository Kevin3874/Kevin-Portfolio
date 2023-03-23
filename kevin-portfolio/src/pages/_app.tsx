import { type AppType } from "next/dist/shared/lib/utils";
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
  );
};

export default MyApp;
