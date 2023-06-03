import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;

  return (
    <>
      <Navbar />
      <AnyComponent {...pageProps} />
    </>
  );
}

export default MyApp;
