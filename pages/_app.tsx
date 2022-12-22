import type { AppProps } from 'next/app'
import Head from 'next/head'

import MyGlobalStyle from '../styles/global-styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <title>Pau Code</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <MyGlobalStyle />
      <Component {...pageProps} />
    </>
)}

export default MyApp
