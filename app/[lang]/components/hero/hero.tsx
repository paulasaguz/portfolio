'use client';

import Image from 'next/image'
import Link from 'next/link'

import paula from "@/public/images/background.png"
import Twitter from '../icons/twitter';
import LinkedIn from '../icons/linkedIn';
import Medium from '../icons/medium';
import Github from '../icons/github';
import Email from '../icons/email';
import Youtube from '../icons/youtube';

import s from './hero.module.css'

function Hero({ dictionary }: {dictionary: any }): JSX.Element {
  return (
    <div className={s.hero}>
      <div className={`${s.wrapper} ctn`}>
        <div className={s.titleContainer}>
          <h1 className={s.h1}>{dictionary.title}</h1>
          <p className={s.subtitle}>{dictionary.subtitle}</p>
          <div className='flex gap-3'>
            <a className={s.icon} href="https://twitter.com/paulasaguz" target="_blank">
              <Twitter size='32px' />
              <figcaption>Twitter</figcaption>
            </a>
            <a className={s.icon} href="https://github.com/paulasaguz" target="_blank">
              <Github size='32px' />
              <figcaption>Github</figcaption>
            </a>
            <a className={s.icon} href="mailto:paulajohanasaguz@gmail.com?subject=Hello There!&body=Hi Paula, so I was looking at your blog and..." target="_blank">
              <Email size='33px'/>
              <figcaption>Email</figcaption>
            </a>
            <a className={s.icon} href="https://www.youtube.com/@PauCode" target="_blank">
              <Youtube size='34px' />
              <figcaption>Youtube</figcaption>
            </a>
            <a className={s.icon} href="https://www.linkedin.com/in/paulasaguz" target="_blank">
              <LinkedIn size='32px' />
              <figcaption>Linkedin</figcaption>
            </a>
            <a className={s.icon} href="https://medium.com/@paulajohana" target="_blank">
              <Medium size='32px' />
              <figcaption>Medium</figcaption>
            </a>
          </div>
          <p className={s.paragraph}>{dictionary.description}{' '}<Link className="text-primary hover:underline" href="/about">{dictionary.link}</Link></p>
        </div>
        <div className={s.image}>
          <Image 
            alt="foto de paula"
            src={paula}
            width={700}
            height={600}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
