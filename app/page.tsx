'use client';

import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pau Code</title>
      </Head>
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home