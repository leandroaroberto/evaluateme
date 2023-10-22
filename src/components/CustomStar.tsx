import { Star } from '@phosphor-icons/react';
import styles from './CustomStar.module.css'

interface StarProps {
    id: number;
    selected: number;
    onClick: (e: any) => void;
}

export const CustomStar = (props : StarProps) => {
  return (
    <div className={props.selected ? styles.starSelected : styles.star} onClick={props.onClick}>
        <Star
            size={30}
            weight="fill"
        />
    </div>
  )
}
