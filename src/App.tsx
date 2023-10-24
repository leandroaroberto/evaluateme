import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { BoxContainer } from './components/BoxContainer'
import { Content } from './components/Content'
import { useState } from 'react'
import { FormContext,  PageContext } from './Context';
interface formDataProps {
  stars: number | null
  comments?: string
}

const starsContent = [
  {id: 1, selected: 0},
  {id: 2, selected: 0},
  {id: 3, selected: 0},
  {id: 4, selected: 0},
  {id: 5, selected: 0},
]

export interface starsContentProps {
  id: number;
  selected: number;
}

function App() {
  const [formData, setFormData] = useState<formDataProps>({stars: 0, comments: ''})
  const [stars, setStars] = useState<starsContentProps[]>(starsContent)

  const [pageControl, setPageControl] = useState(0)

  return (
    <PageContext.Provider value={[pageControl, setPageControl]}>
      <FormContext.Provider
        value={[
          formData,
          setFormData,
          stars,
          setStars,
        ]}
      >
        <div className={styles.container}>
          <BoxContainer>
            <Header />
            {pageControl === 0 ? 
              (
                <Content 
                  title="Avalie o produto" 
                  description="O que você achou do produto" 
                  product="Apple Smart Watch G2 series"
                />
              )
              :
              <Content 
                title="Deixe um comentário" 
                description="Conte sobre o motivo da sua avaliação" 
              />
            }
          </BoxContainer>
        </div>
      </FormContext.Provider>
    </PageContext.Provider>
  )
}

export default App
