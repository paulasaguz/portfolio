import styled from 'styled-components'
import Container from '../ui-components/container/container'

import { BREAKPOINTS_VALUES } from '../ui-components/breakpoints'

const StyledImage = styled.div`
  z-index: 0;
  width: 850px;
  height: 920px;
  margin-block-start: -24px;
  margin-inline-end: -205px;

  @media (max-width: ${BREAKPOINTS_VALUES.tabletPortrait}) {
    width: 430px;
    height: 520px;
  }
`;

const Wrapper = styled(Container)`
  @media (max-width: ${BREAKPOINTS_VALUES.tabletPortrait}) {
    flex-direction: column-reverse;
  }
`;

const StyledHero = styled.div`
  position: relative;
  margin: 80px 0 0;
`;

const TitleContainer = styled.div`
  margin: 60px 0;
`
const H1 = styled.h1`
  font-size: 64px;
  font-weight: 700;
  margin-block-end: 8px;
`

const Subtitle = styled.p`
  color: var(--primary);
  font-size: 32px;
  font-weight: 700;
  margin-block-start: 8px;
`

const Paragraph = styled.p`
  color: var(--secondary);
  max-width: 500px;
  font-size: 1.1em;

  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export { Wrapper, StyledImage, StyledHero, TitleContainer, H1, Subtitle, Paragraph };