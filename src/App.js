import styled from 'styled-components'
import Home from './pages/Home'
import Register from './pages/Register'
import Habits from './pages/Habits'

export default function App() {
  return (
    <Container>
      {/* <Home/> */}
      {/* <Register/> */}
      <Habits/>
    
    </Container>
  )
}

const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`

