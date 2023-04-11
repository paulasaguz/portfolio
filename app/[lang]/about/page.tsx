import { getDictionary } from '@/dictionaries';
import { Locale } from '../../../i18n-config'
import s from './about.module.css'

export default async function About({ params: { lang }}: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className='ctn mt-36 mb-20'>
      <h1>{dictionary.about.title}</h1>
      <p className={s.root}>{dictionary.about.firstParagraph}</p>
      <p className={s.root}>{dictionary.about.secondParagraph}</p>
      <p className={s.root}>{dictionary.about.thirdParagraph}</p>
      <p className={s.root}>{dictionary.about.fourParagraph}</p>
    </div>
  )
}