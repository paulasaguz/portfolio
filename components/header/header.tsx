import Link from 'next/link'

import Logo from '../logo';
import Container from '../ui-components/container/container'
// import MediumIcon from '../../public/icons/medium.svg'

import { LogoContainer, StyledHeader, StyledUl, StyledList, StyledGithubIcon, StyledLinkedInIcon } from './styles'

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <Container>
        <nav>
          <LogoContainer>
            <Link href='/'>
              <a>
                <Logo />
              </a>
            </Link>
          </LogoContainer>
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
              <Link href='https://www.linkedin.com/in/paulasaguz/' target="_blank">
                <a title="LinkedIn" aria-label="LinkedIn">
                  <StyledLinkedInIcon />
                </a>
              </Link>
            </StyledList>
            <StyledList>
              <Link href='https://github.com/paulasaguz' target="_blank" >
                <a title="Github" aria-label="Github">
                  <StyledGithubIcon />
                </a>
              </Link>
            </StyledList>
            {/* <StyledList>
              <Link href='https://medium.com/@paulajohana'>
                <MediumIcon title="Medium" />
              </Link>
            </StyledList> */}
          </StyledUl>
        </nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
