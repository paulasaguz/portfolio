import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

import { Wrapper, StyledImage, StyledHero, TitleContainer, H1, Subtitle, Paragraph } from './styles'


function Hero(): JSX.Element {
  const { t } = useTranslation();

  return (
    <StyledHero>
      <Wrapper>
        <TitleContainer>
          <H1>{t('LandingPage.Title')}</H1>
          <Subtitle>{t('LandingPage.Subtitle')}</Subtitle>
          <Paragraph>{t('LandingPage.Description')} <Link href="/about">{t('LandingPage.Link')}</Link></Paragraph>
        </TitleContainer>
        <StyledImage>
          <Image 
            alt="foto de paula"
            objectFit="cover"
            src="/static/images/background.png"
            width={1.1}
            height={0.999}
            layout="responsive"
          />
        </StyledImage>
      </Wrapper>
    </StyledHero>
  )
}

export default Hero
