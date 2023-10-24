import styles from './Header.module.css'
import Picture from '../assets/apple-watch.svg'
import { useContext } from 'react';
import { FormContext } from '../Context'
import { ArrowLeft } from '@phosphor-icons/react';


export const Header = () => {
  const [ formData, setFormData, setPageControl, pageControl ] : any = useContext(FormContext);

  const backPage = () => {
    setPageControl(0)
  }

  return (
    <div className={styles.headerContainer}>
      <header>
        { pageControl === 1 && (
            <div className={styles.backButtonContainer}>
              <ArrowLeft size={30} color='white' onClick={backPage} className={styles.backButton}/>
            </div>
        ) }
        <img src={Picture}/>
      </header>
    </div>
  )
}
