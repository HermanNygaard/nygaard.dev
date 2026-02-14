import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/react";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;

  return (
    <>
      <Navbar />
      <AnyComponent {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
