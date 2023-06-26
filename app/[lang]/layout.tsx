import { Poppins, Azeret_Mono } from "@next/font/google";
import { getDictionary } from '@/dictionaries';
import { Locale } from '../../i18n-config'

import Header from './components/header'
import Footer from './components/footer'

import { i18n } from '../../i18n-config'
import '@/styles/globals.css';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const poppins = Poppins({
  variable: "--poppins-font",
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const azeret = Azeret_Mono({
  variable: "--azeret-font",
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})


export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang} className={`${poppins.variable} ${azeret.variable}`}>
      <body>
        <Header dictionary={dictionary.header} lang={lang} />
        {children}
        <Footer dictionary={dictionary.footer} />
      </body>
    </html>
  )
}
