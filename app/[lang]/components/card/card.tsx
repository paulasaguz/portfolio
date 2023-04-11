import Typography from "../ui/Typography";
import s from './card.module.css';

const Card = ({ title, description, rol, attendant, month, year }: { title: string; description: string; rol: string; attendant: string; month: string; year: string }) => {
  return (
    <div className={s.root}>
      <div className="flex justify-between">
        <Typography Tag="p" variant="body" className="m-0 text-primary">{rol}</Typography><Typography Tag="p" variant="body" className="m-0">{month}/{year}</Typography>
      </div>
      <Typography Tag="h2" variant="sectionHeading">{title}</Typography>
      <Typography Tag="p" variant="body">{description}</Typography>
      <Typography Tag="p" variant="body">{attendant}</Typography>
    </div>
  )
}

export default Card;