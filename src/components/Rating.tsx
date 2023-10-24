import { ArrowRight } from '@phosphor-icons/react'
import styles from './Rating.module.css'
import { useState, useContext } from 'react'
import { FormContext } from '../Context'

import { CustomStar } from './CustomStar'

const starsContent = [
    {id: 1, selected: 0},
    {id: 2, selected: 0},
    {id: 3, selected: 0},
    {id: 4, selected: 0},
    {id: 5, selected: 0},
]

interface starsContentProps {
  id: number;
  selected: number;
}


export const Rating = () => {

    const [stars, setStars] = useState<starsContentProps[]>(starsContent)
    const [formData, setFormData, setPageControl ] : any = useContext(FormContext);

    const handleSelection = (starId: number) => {
        const starSelectedIdVal = + (! stars[starId -1].selected)

        setFormData({...formData, stars: starSelectedIdVal ? starId : 0})

        const newStars = stars.reduce((acc, star) : any => {
          if (star.id <= starId) {
            return [...acc, {id: star.id, selected: starSelectedIdVal}]
          } else {
            return [...acc, {id: star.id, selected: 0}]
          }
        }, [] )

        setStars(newStars)
    }

    const nextPage = () => {
      setPageControl(1)
    }

  return (
    <div className={styles.rating}>
        <div className={styles.ratingContent}>
            {stars.map(star => (
                <CustomStar
                    key={star.id}
                    id={star.id}
                    selected={stars[star.id -1].selected}
                    onClick={() => handleSelection(star.id)}
                />
            ))}
        </div>
        <div className={styles.ratingDescription}>
            <span>Ruim</span>
            <span>Ótimo</span>
        </div>
        <div className={styles.buttonContent}>
            <button 
              onClick={nextPage}
            >
                <span>Confirmar</span>
                <ArrowRight size={30}/>
            </button>
        </div>
    </div>
  )
}
