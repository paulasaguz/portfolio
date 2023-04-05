import s from './logo.module.css'

function Logo (): JSX.Element {
  return (
    <div className={s.logo}>Paula <br/><span className={s.fontColor}>Johana</span></div>
  )
}

export default Logo;
