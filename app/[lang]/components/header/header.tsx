'use client';

import Link from 'next/link'

import Logo from '../logo';
import Sun from '../icons/sun';
import s from './header.module.css'

function Header({ dictionary }: {dictionary: { about: string}}): JSX.Element {
  return (
    <header className={s.header}>
      <div className='ctn flex justify-between'>
        <div className='flex items-center'>
          <Link href='/' className='flex text-center'>
              <Logo />
          </Link>
        </div>
        <div>
          <ul className={s.ul}>
            <li className={s.list}>
              <Link href='/'>{dictionary.about}</Link>
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
          <Sun />
        </div>
      </div>
    </header>
  )
}

export default Header
