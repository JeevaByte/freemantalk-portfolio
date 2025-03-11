// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="FreemanTalk - Portfolio and Blog of Jeeva Balakrishnan, Cloud Engineer" />
          <meta property="og:title" content="FreemanTalk - Portfolio and Blog" />
          <meta property="og:description" content="FreemanTalk - Portfolio and Blog of Jeeva Balakrishnan, Cloud Engineer" />
          <meta property="og:image" content="/your-image.jpg" />
          <meta property="og:url" content="https://freemantalk.co.uk" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
