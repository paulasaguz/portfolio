import Image from 'next/image'
import { useTranslation } from 'react-i18next';

import Container from '../ui-components/container/container'

import { StyledImage, StyledHero, TitleContainer, H1, Subtitle, Paragraph } from './styles'


function Hero(): JSX.Element {
  const { t } = useTranslation();

  return (
    <StyledHero>
      <Container>
        <TitleContainer>
          <H1>{t('LandingPage.Title')}</H1>
          <Subtitle>{t('LandingPage.Subtitle')}</Subtitle>
          <Paragraph>{t('LandingPage.Description')}</Paragraph>
        </TitleContainer>
      </Container>
      <StyledImage>
        <Image alt="foto de paula" objectFit="cover" src="/images/background.png" width="630" height="720" />
      </StyledImage>
    </StyledHero>
  )
}

export default Hero
