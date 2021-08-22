import Head from 'next/head';
// import { GlobalStyles } from 'twin.macro'
// import { css } from 'linaria'
import '../styles/styles.css';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>
        Nextjs App with TypeScript, ESlint, Jest, Emotion, Tailwind and Twin
      </title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    {/* <GlobalStyles  /> */}
    {/* <Global styles={globalStyles} /> */}
    <Component {...pageProps} />
  </>
);

export default App;
