import '../styles/index.css'
import Head from 'next/head'
import Footer from '../components/footer/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Header } from '../components/header/Header'
config.autoAddCss = false

function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='https://indestructibletype.com/fonts/Jost.css'
          as="style"
        />
         <link
          href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap'
          rel='preload'
          as="style"
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap'
          rel='preload'
          as="style"
        />
        <link
          rel='stylesheet'
          href='https://indestructibletype.com/fonts/Jost.css'
          type='text/css'
          charSet='utf-8'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap'
          rel='stylesheet'
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap"
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.11.2/css/all.css'
        />
        <script
          type='text/javascript'
          src='https://widget.clutch.co/static/js/widget.js'
        ></script>
        <title>
          Third Pig Software Ltd - Software Engineering and Technology
          Consultancy
        </title>
        <meta
          name='description'
          content='Experts in the delivery of high quality, high-impact, software
                solutions.'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://thirdpigsoftware.com/' />
        <meta property='og:title' content='Third Pig Software Ltd' />
        <meta
          property='og:description'
          content='Experts in the delivery of high quality, high-impact software
                solutions.'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://thirdpigsoftware.com/' />
        <meta property='twitter:title' content='Third Pig Software Ltd' />
        <meta
          property='twitter:description'
          content='Experts in the delivery of high quality, high-impact software
                solutions.'
        />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-LBHHSCG7JG'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LBHHSCG7JG');
          `
          }}
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
