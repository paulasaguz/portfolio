import Logo from '../logo';
import FlexContainer from '../ui-components/container/container'

import { StyledFooter, StyledUl, StyledList } from './styles'

function Footer (): JSX.Element {
  return (
    <StyledFooter>
    <FlexContainer direction="column">
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
      </FlexContainer>
    </StyledFooter>
  )
}

export default Footer;