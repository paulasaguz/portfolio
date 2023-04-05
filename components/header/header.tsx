'use client';

import Link from 'next/link'

import Logo from '../logo';
import s from './header.module.css'

function Header(): JSX.Element {
  return (
    <header className={s.header}>
      <div>
        <Link href='/' className='flex text-center'>
            <Logo />
        </Link>
      </div>
      <div>
        <ul className={s.ul}>
          <li className={s.list}>
            <Link href='/'>about</Link>
          </li>
          <li className={s.list}>
            <Link href='/blog'>blog</Link>
          </li>
          <li className={s.list}>
            <Link href='/'>talks</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className={s.ul}>
          <li className={s.list}>
            <Link href='https://www.linkedin.com/in/paulasaguz/' target="_blank">
              {/* <a title="LinkedIn" aria-label="LinkedIn"> */}
                {/* <StyledLinkedInIcon /> */}
              {/* </a> */}
              LinkedIn
            </Link>
          </li>
          <li className={s.list}>
            <Link href='https://github.com/paulasaguz' target="_blank" >
              {/* <a title="Github" aria-label="Github"> */}
                {/* <StyledGithubIcon /> */}
              {/* </a> */}
              Github
            </Link>
          </li>
          {/* <li className={s.list}>
            <Link href='https://medium.com/@paulajohana'>
              <MediumIcon title="Medium" />
            </Link>
          </li> */}
        </ul>
      </div>
    </header>
  )
}

export default Header
