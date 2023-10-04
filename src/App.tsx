import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { BoxContainer } from './components/BoxContainer'
import { Content } from './components/Content'

function App() {

  return (
    <div className={styles.container}>
      <BoxContainer>
        <Header />
        <Content 
          title="Avalie o produto" 
          description="O que você achou do produto" 
          product="Apple Smart Watch G2 series"
        />
      </BoxContainer>
    </div>
  )
}

export default App
