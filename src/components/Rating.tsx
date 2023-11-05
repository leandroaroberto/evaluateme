import styles from './Rating.module.css'
import { useContext } from 'react'
import { FormContext } from '../Context'

import { CustomStar } from './CustomStar'
import { starsContentProps } from '../App'


export const Rating = () => {

    const [formData, setFormData, stars, setStars ] : any = useContext(FormContext);

    const handleSelection = (starId: number) => {
        const starSelectedIdVal = + (! stars[starId -1].selected)

        let newStars = []
        if (starId < 5 && stars[starId]?.selected == 1 ){
          newStars = stars.reduce((acc: [], star: starsContentProps) => {
            if (star.id > starId) {
              return [...acc, {id: star.id, selected: starSelectedIdVal}]
            } else {
              return [...acc, {id: star.id, selected: ! starSelectedIdVal}]
            }
          }, [] )
        } else if (starId > 1 && stars[starId-1]?.selected == 1) {
          newStars = stars.reduce((acc: [], star: starsContentProps) => {
            if (star.id == starId) {
              return [...acc, {id: star.id, selected: starSelectedIdVal}]
            } else if (star.id < starId){
              return [...acc, {id: star.id, selected: ! starSelectedIdVal}]
            } else {
              return [...acc, {id: star.id, selected: starSelectedIdVal}]
            }
          }, [] )
        } else {
          newStars = stars.reduce((acc: [], star: starsContentProps) => {
            if (star.id <= starId) {
              return [...acc, {id: star.id, selected: starSelectedIdVal}]
            } else {
              return [...acc, {id: star.id, selected: 0}]
            }
          }, [] )
        }

        setStars(newStars)

        setFormData({...formData, stars: starId})
    }

  return (
    <div className={styles.rating}>
        <div className={styles.ratingContent}>
            {stars.map((star:starsContentProps) => (
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
    </div>
  )
}
