import Logo from '../logo';

import s from './footer.module.css'

function Footer (): JSX.Element {
  return (
    <footer className={s.root}>
        <a><Logo /></a>
        <nav>
          <ul>
            <li>
              <a>about</a>
            </li>
            <li>
              <a>blog</a>
            </li>
            <li>
              <a>talks</a>
            </li>
          </ul>
        </nav>
    </footer>
  )
}

export default Footer;