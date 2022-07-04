import styled from 'styled-components'

const StyledImage = styled.div`
  position: absolute;
  right: 0;
  top: -10px;
  z-index: 0;
`;

const StyledHero = styled.div`
  position: relative;
  margin: 80px 0 0;
  height: 800px;
`;

const TitleContainer = styled.div`
  margin: 60px 0;
`
const H1 = styled.h1`
  font-size: 64px;
  font-weight: 700;
  margin-block-end: 16px;
`

const Subtitle = styled.p`
  color: var(--primary);
  font-size: 32px;
  font-weight: 700;
  margin-block-start: 16px;
`

const Paragraph = styled.p`
  color: var(--secondary);
  max-width: 500px;
`;

export { StyledImage, StyledHero, TitleContainer, H1, Subtitle, Paragraph };