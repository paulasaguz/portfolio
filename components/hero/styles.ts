import styled from 'styled-components'
import Container from '../ui-components/container/container'

import { BREAKPOINTS_VALUES } from '../ui-components/breakpoints'

const StyledImage = styled.div`
  z-index: 0;
  width: 750px;
  height: auto;
  margin-block-start: -24px;
  margin-inline-end: -205px;

  @media (max-width: ${BREAKPOINTS_VALUES.tabletPortrait}) {
    width: 430px;
    height: auto;
    align-self: center;
    margin-inline-start: 15px;
    margin-inline-end: 0px;
  }
`;

const Wrapper = styled(Container)`
  align-items: flex-start;

  @media (max-width: ${BREAKPOINTS_VALUES.tabletPortrait}) {
    flex-direction: column-reverse;
  }
`;

const StyledHero = styled.div`
  position: relative;
  margin-block-start: 80px;
`;

const TitleContainer = styled.div`
  margin-block-start: 60px;

  @media (max-width: ${BREAKPOINTS_VALUES.tabletPortrait}) {
    margin-block-start: 10px;
  }
`

const H1 = styled.h1`
  font-size: 64px;
  font-weight: 700;
  margin-block-end: 8px;

  @media (max-width: ${BREAKPOINTS_VALUES.tabletPortrait}) {
    font-size: 48px;
  }
`

const Subtitle = styled.p`
  color: var(--primary);
  font-size: 32px;
  font-weight: 700;
  margin-block-start: 8px;

  @media (max-width: ${BREAKPOINTS_VALUES.tabletPortrait}) {
    font-size: 24px;
  }
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