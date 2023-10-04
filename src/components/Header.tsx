import styles from './Header.module.css'
import Picture from '../assets/apple-watch.svg'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header>
        <img src={Picture}/>
      </header>
    </div>
  )
}
