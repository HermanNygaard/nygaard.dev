import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>nygaard.dev – Herman Nygaard</title>
        <meta name="description" content="Herman Nygaard personal website" />
      </Head>
      <body className="bg-white dark:bg-slate-800 text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
