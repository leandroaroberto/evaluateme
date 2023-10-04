import styles from './BoxContainer.module.css'

export const BoxContainer = ({children} : any) => {
  return (
    <div className={styles.boxContainer}>
        <div className={styles.mainBox}>
          {children}
        </div>
    </div>
  )
}
