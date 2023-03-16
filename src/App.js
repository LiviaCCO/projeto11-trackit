import styled from 'styled-components'
import Home from './pages/Home'
import Register from './pages/Register'
import Habits from './pages/Habits'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cadastro" element={<Register/>}></Route>
          <Route path="/habitos" element={<Habits/>}></Route>          
        </Routes>
      </Container>
    </BrowserRouter>
    
  )
}

const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`

