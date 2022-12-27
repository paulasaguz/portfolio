import Logo from '../logo';
import Container from '../ui-components/container/container'
import Link from 'next/link'

import { StyledHeader, StyledUl, StyledList } from './styles'

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <Container>
        <nav>
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>
        </nav>
        <nav>
          <StyledUl>
            <StyledList>
              <Link href='/'>about</Link>
            </StyledList>
            <StyledList>
              <Link href='/blog'>blog</Link>
            </StyledList>
            <StyledList>
              <Link href='/'>talks</Link>
            </StyledList>
          </StyledUl>
        </nav>
        <nav>
          <StyledUl>
            <StyledList>
              <Link href='https://www.linkedin.com/in/paulasaguz/'>Linkedn</Link>
            </StyledList>
            <StyledList>
              <Link href='https://github.com/paulasaguz'>Github</Link>
            </StyledList>
            </StyledUl>
        </nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
