import Logo from '../logo';
import Container from '../ui-components/container/container'

import { StyledHeader, StyledUl, StyledList } from './styles'

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <Container>
        <a><Logo /></a>
        <nav>
          <StyledUl>
            <StyledList>
              <a>about</a>
            </StyledList>
            <StyledList>
              <a>blog</a>
            </StyledList>
            <StyledList>
              <a>talks</a>
            </StyledList>
          </StyledUl>
        </nav>
        <nav>
          <StyledUl>
            <StyledList>
              <a>instagram</a>
            </StyledList>
            <StyledList>
              <a>linkedin</a>
            </StyledList>
            <StyledList>
              <a>twitter</a>
            </StyledList>
            </StyledUl>
        </nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
