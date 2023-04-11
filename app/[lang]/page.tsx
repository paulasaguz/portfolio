import { getDictionary } from '@/dictionaries';
import { Locale } from '../../i18n-config'

import Hero from './components/hero'
import Youtube from './components/youtube'

const Home = async ({ params: { lang }}: { params: { lang: Locale }}) => {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Hero dictionary={dictionary.landingPage} />
      <Youtube />
    </>
  )
}

export default Home