import styles from './Content.module.css'
import { Rating } from './Rating';

interface ContentProps {
    title: string;
    description: string;
    product?: string;
}

export const Content = (props : ContentProps) => {
  return (
    <div className={styles.contentContainer}>
        <main >
            <h2>{props.title}</h2>
            <p>
            {props.description}
            </p>
            {props.product && (<div><span className={styles.product}>&nbsp; {props.product}?</span></div>)}
        </main>
        {props.product && (
           <Rating />
        )
        }
    </div>
  )
}
