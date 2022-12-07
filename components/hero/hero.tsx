import Container from '../ui-components/container/container'
import Image from 'next/image'

import { StyledImage, StyledHero, TitleContainer, H1, Subtitle, Paragraph } from './styles'


function Hero(): JSX.Element {
  return (
    <StyledHero>
      <Container>
        <TitleContainer>
          <H1>¡Hola! Soy Paula</H1>
          <Subtitle>Ingeniera en mecatronica software Engineer</Subtitle>
          <Paragraph>Colombian based in Mexico, Im passionate about digital products, startup and tech culture, always focused on solving real problems for the users and making the web more colourful and accessible for anyone.</Paragraph>
        </TitleContainer>
      </Container>
      <StyledImage>
        <Image alt="foto de paula" objectFit="cover" src="/static/img/group17.png" width="630" height="720" />
      </StyledImage>
    </StyledHero>
  )
}

export default Hero
