import Logo from '../logo';

import s from './footer.module.css'

function Footer (): JSX.Element {
  return (
    <footer className={s.root}>
      <div className='flex flex-col items-center ctn'>
        <a><Logo /></a>
        <nav>
          <ul className={s.ul}>
            <li className={s.li}>
              <a>about</a>
            </li>
            <li className={s.li}>
              <a>blog</a>
            </li>
            <li className={s.li}>
              <a>talks</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;