import { getDictionary } from '@/dictionaries';
import { Locale } from '../../../i18n-config'
import Card from '../components/card'

export default async function About({ params: { lang }}: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className='ctn mt-36 mb-20'>
      <h1>{dictionary.talks.title}</h1>
      <Card rol="speaker" title="Descubriendo CSS layout" month='04' year='2019' description='meet up by GDG Cloud MX' attendant="+50 attendant" />
    </div>
  )
}