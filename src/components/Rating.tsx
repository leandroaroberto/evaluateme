import { ArrowRight, Star } from '@phosphor-icons/react'
import styles from './Rating.module.css'
import { useState } from 'react'


export const Rating = () => {

    const stars = [
        {id: 1, color: 'yellow'},
        {id: 1, color: 'yellow'},
        {id: 1, color: 'yellow'},
        {id: 1, color: 'gray'},
        {id: 1, color: 'gray'},
    ]

    const [selected, setSelected] = useState<boolean>(false)

    const checked = () => {
        setSelected( ! selected)
    }

  return (
    <div className={styles.rating}>
        <div className={styles.ratingContent}>
            <div className={selected ? styles.starSelected : styles.star} onClick={checked}>
                <Star
                    size={30} 
                    weight="fill" 
                />
            </div>
            <div className={selected ? styles.starSelected : styles.star} onClick={checked}>
                <Star
                    size={30} 
                    weight="fill" 
                />
            </div>
            <div className={selected ? styles.starSelected : styles.star} onClick={checked}>
                <Star
                    size={30} 
                    weight="fill" 
                />
            </div>
            <div className={selected ? styles.starSelected : styles.star} onClick={checked}>
                <Star
                    size={30} 
                    weight="fill" 
                />
            </div>
            <div className={selected ? styles.starSelected : styles.star} onClick={checked}>
                <Star
                    size={30} 
                    weight="fill" 
                />
            </div>
        </div>
        <div className={styles.ratingDescription}>
            <span>Ruim</span>
            <span>Ótimo</span>
        </div>
        <div className={styles.buttonContent}>
            <button>
                <span>Confirmar</span>
                <ArrowRight size={30}/>
            </button>
        </div>
    </div>
  )
}
