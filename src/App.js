import styled from 'styled-components'
import Home from './pages/Home'

export default function App() {
  return (
    <Container>
    <Home/>
    
    </Container>
  )
}

const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`

