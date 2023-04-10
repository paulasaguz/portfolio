import { Poppins, Azeret_Mono } from "@next/font/google";

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


export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang} className={`${poppins.variable} ${azeret.variable}`}>
      <body>{children}</body>
    </html>
  )
}
