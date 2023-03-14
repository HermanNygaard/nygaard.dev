import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="Herman Nygaard's personal website" />
        <meta property="og:image" content="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
