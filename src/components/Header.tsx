import styles from './Header.module.css'
import Picture from '../assets/apple-watch.svg'


export const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.headerBox}>
          <header>
            <img src={Picture}/>
          </header>
          <main>
            <h2>Avalie o produto</h2>
            <p>
              O que você achou do produto &nbsp;
              <span>Apple Smart Watch G2 series</span>
              ?
            </p>
          </main>
        </div>
    </div>
  )
}
