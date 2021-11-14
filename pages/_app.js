import '../styles/index.css'
import Head from 'next/head'
import Footer from '../components/footer/Footer'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://indestructibletype.com/fonts/Jost.css'
          type='text/css'
          charSet='utf-8'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.11.2/css/all.css'
        />

      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
