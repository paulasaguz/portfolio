import { getDictionary } from '@/dictionaries';
import { Locale } from '../../i18n-config'

import Hero from './components/hero'
import Youtube from './components/youtube'
import Articles from './components/articles';

const Home = async ({ params: { lang }}: { params: { lang: Locale }}) => {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Hero lang={lang} dictionary={dictionary.landingPage} />
      <Youtube />
      <Articles />
    </>
  )
}

export default Home