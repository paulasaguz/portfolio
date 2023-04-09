import s from './styles.module.css'

const Medium = ({ size }: { size: string }) => {
  return (
    <svg className={s.root} width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0H2C0.895 0 0 0.895 0 2V20C0 21.105 0.895 22 2 22H20C21.105 22 22 21.105 22 20V2C22 0.895 21.105 0 20 0ZM18.542 17H12.611V16.667L14 15.445V8.47L10.589 17H10.056L6.25 8.403V14.49L7.99 16.667V17H3.458V16.667L5.257 14.49V7.248L3.658 5.249C3.658 5.249 3.658 4.96 3.658 5.005H8.034L11.433 12.358L14.365 5.005H18.519V5.249L17 6.526V15.445L18.542 16.667V17Z" fill="#333333"/>
    </svg>
  )
}

export default Medium;
