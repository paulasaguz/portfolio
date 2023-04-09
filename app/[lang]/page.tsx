import { getDictionary } from '@/dictionaries';

import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import Youtube from './components/youtube'

const Home = async () => {
  const dictionary = await getDictionary('es');
  return (
    <div>
      <Header dictionary={dictionary.header} />
      <Hero dictionary={dictionary.landingPage} />
      <Youtube />
      <Footer />
    </div>
  )
}

export default Home