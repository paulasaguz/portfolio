import Container from '../ui-components/container'
import PaulaHero from './styles'
import Back from './background.svg'

function Hero(): JSX.Element {
  return (
    <Container>
      <div>
        <h1>Hola soy Paula</h1>
        <p>Ingeniera en mecatronica software Engineer</p>
      </div>
      <div>
        <Back width="0" height="0" />
        <PaulaHero alt='imagen de paula' src='/assets/paula-hero.png' width="450" height="565" />
      </div>
    </Container>
  )
}

export default Hero
