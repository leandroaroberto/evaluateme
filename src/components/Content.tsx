import { useContext } from 'react';
import styles from './Content.module.css'
import { Rating } from './Rating';
import { FormContext, PageContext } from '../Context';
import { ArrowRight } from '@phosphor-icons/react';

interface ContentProps {
    title: string;
    description: string;
    product?: string;
}

export const Content = (props : ContentProps) => {

  const [pageControl, setPageControl ] : any = useContext(PageContext);
  const [formData, setFormData, stars, setStars ] : any = useContext(FormContext);
  const nextPage = () => {
    setPageControl(1)
  }

  const sendFormData = () => {
    console.log('sending the data...', formData)
  }

  const changeDescription = (e: any) => {
    e.preventDefault()
    setFormData({...formData, comments: e.target.value})
  }

  return (
    <div className={styles.contentContainer}>
        <main >
            <h2>{props.title}</h2>
            <p>
            {props.description}
            </p>
            {props.product && (<div><span className={styles.product}>&nbsp; {props.product}?</span></div>)}
        </main>
        {props.product ? (
           <Rating />
        ) :
        (
          <textarea 
                placeholder="Escreva aqui seu comentário" 
                value={formData.comments}
                onChange={changeDescription}
            />
        )
        }
        <div className={styles.buttonContent}>
        { props.product ? 
        (
            <button 
              onClick={nextPage}
            >
                <span>
                  Confirmar
                </span>
                <ArrowRight size={30}/>
            </button>
        )
        :
        (
          <button 
            onClick={sendFormData}
          >
              <span>
                Enviar
              </span>
              <ArrowRight size={30}/>
          </button>
      )
        }
        </div>
    </div>
  )
}
