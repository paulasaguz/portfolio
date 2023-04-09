import s from './styles.module.css'

const Youtube = ({ size }: { size: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={s.root} version="1.1" id="Layer_1" x="0px" y="0px" width={size} height={size} viewBox="0 0 71.4 50">
      <path d="M69.9,7.8c-0.8-3.1-3.2-5.5-6.3-6.3C58.1,0,35.7,0,35.7,0S13.4,0,7.8,1.5c-3,0.8-5.5,3.3-6.3,6.4C0,13.4,0,25,0,25   s0,11.6,1.5,17.2c0.8,3.1,3.2,5.5,6.3,6.3C13.4,50,35.7,50,35.7,50s22.4,0,27.9-1.5c3.1-0.8,5.5-3.2,6.3-6.3   c1.5-5.6,1.5-17.2,1.5-17.2S71.5,13.4,69.9,7.8z M28.6,35.7V14.3L47.2,25L28.6,35.7z"/>
    </svg>
  )
}

export default Youtube;