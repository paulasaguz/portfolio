import type { NextPage } from 'next'

import Header from '../components/header'
import Footer from '../components/footer'
import '../i18n';

const Blog: NextPage = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default Blog