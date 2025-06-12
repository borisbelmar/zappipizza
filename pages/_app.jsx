import Head from 'next/head'
import PropTypes from 'prop-types'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zappipizza – Sabor Artesanal</title>
        <meta name="description" content="Las mejores pizzas artesanales de Pudahuel Sur" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
}
