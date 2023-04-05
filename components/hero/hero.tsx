'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
import s from './hero.module.css'

function Hero(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={s.hero}>
      <div className={s.wrapper}>
      <div className={s.titleContainer}>
      <h1 className={s.h1}>{t('LandingPage.Title')}</h1>
          <p className={s.subtitle}>{t('LandingPage.Subtitle')}</p>
          <p>{t('LandingPage.Description')} <Link href="/about">{t('LandingPage.Link')}</Link></p>
        </div>
        <div className={s.image}>
          <Image 
            alt="foto de paula"
            src="/images/background.png"
            width={800}
            height={700}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
