import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="max-w-2xl w-full flex-grow p-3 gap-3 flex flex-col items-start justify-center mx-auto mt-10">
      <Head>
        <title>nygaard.dev – Herman Nygaard</title>
      </Head>
      <h1 className="font-medium text-2xl">Herman Nygaard</h1>
      <h2 className="text-xl">Software Engineer at Microsoft</h2>
      <Link href="/blog">
        <a className="underline">/blog</a>
      </Link>
      <div>
        <div className="flex gap-4">
          <a
            className="underline text-"
            target="_blank"
            href="https://github.com/HermanNygaard"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            target="_blank"
            className="underline"
            href="https://www.linkedin.com/in/hermannygaard/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="underline" href="mailto:herman@nygaard.dev">
            Mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
