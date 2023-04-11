import Logo from '../logo';

import Typography from '../ui/Typography';
import s from './footer.module.css'

function Footer ({ dictionary }: {dictionary: { made: string}}): JSX.Element {
  return (
    <footer className={s.root}>
      <div className='flex flex-col items-center ctn'>
        <a><Logo /></a>
        <Typography Tag="p" variant="body">{dictionary.made}</Typography>
      </div>
    </footer>
  )
}

export default Footer;