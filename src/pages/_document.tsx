import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://fonts.cdnfonts.com/css/euclid-circular-b'
          rel='stylesheet'
        />
        <link
          href='https://fonts.cdnfonts.com/css/proxima-nova'
          rel='stylesheet'
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
