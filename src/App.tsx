import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { BoxContainer } from './components/BoxContainer'
import { Content } from './components/Content'
import { useState } from 'react'
import { FormContext } from './Context';
interface formDataProps {
  stars: number | null
  comments?: string
}

function App() {
  const [formData, setFormData] = useState<formDataProps>({stars: 0, comments: ''})
  const [pageControl, setPageControl] = useState(0)

  return (
    <FormContext.Provider
      value={[
        formData,
        setFormData,
        setPageControl,
        pageControl
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
  )
}

export default App
