import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from 'react-i18next';

import Container from '../ui-components/container/container'

import { Wrapper, StyledImage, StyledHero, TitleContainer, H1, Subtitle, Paragraph } from './styles'


function Hero(): JSX.Element {
  const { t } = useTranslation();

  return (
    <StyledHero>
      <Wrapper>
        <Container>
          <TitleContainer>
            <H1>{t('LandingPage.Title')}</H1>
            <Subtitle>{t('LandingPage.Subtitle')}</Subtitle>
            <Paragraph>{t('LandingPage.Description')} <Link href="/about">{t('LandingPage.Link')}</Link></Paragraph>
          </TitleContainer>
        </Container>
        <StyledImage>
          <Image 
            alt="foto de paula"
            objectFit="cover"
            src="/images/background.png"
            width={630}
            height={720}
            layout="responsive"
          />
        </StyledImage>
      </Wrapper>
    </StyledHero>
  )
}

export default Hero
