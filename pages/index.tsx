import type { NextPage } from 'next'

import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import MyGlobalStyle from '../styles/global-styles'

const Home: NextPage = () => {
  return (
    <div>
      <MyGlobalStyle />
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home
