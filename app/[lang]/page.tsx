import { getDictionary } from '@/dictionaries';
import { Locale } from '../../i18n-config'

import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import Youtube from './components/youtube'

const Home = async ({ params: { lang }}: { params: { lang: Locale }}) => {
  const dictionary = await getDictionary(lang);
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