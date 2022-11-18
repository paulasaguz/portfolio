import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import MyGlobalStyle from '../styles/global-styles'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pau Code</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <MyGlobalStyle />
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home
