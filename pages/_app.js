import '../styles/index.css'
import Head from 'next/head'
import Footer from '../components/footer/Footer'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charSet="utf-8" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
