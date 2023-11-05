import styles from './Header.module.css'
import Picture from '../assets/apple-watch.svg'
import { useContext } from 'react';
import { PageContext } from '../Context'
import { ArrowLeft } from '@phosphor-icons/react';


export const Header = () => {
  const [ pageControl, setPageControl ] : any = useContext(PageContext);

  const backPage = () => {
    setPageControl(0)
  }

  return (
    <div className={styles.headerContainer}>
      <header>
        <img src={Picture}/>
      </header>
      { pageControl === 1 && (
            <div className={styles.backButtonContainer}>
              <ArrowLeft size={30} color='white' onClick={backPage} className={styles.backButton}/>
            </div>
        ) }
    </div>
  )
}
