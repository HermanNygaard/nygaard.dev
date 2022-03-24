import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="Herman Nygaard personal website" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>nygaard.dev – Herman Nygaard</title>
      </Head>
      <body className="bg-white dark:bg-slate-800 text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
