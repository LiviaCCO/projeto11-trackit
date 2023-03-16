import styled from 'styled-components'
import Home from './pages/Home'
import Register from './pages/Register'
import Today from './pages/Today'
import HabitsList from './pages/HabitsList'
import Historic from './pages/Historic'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cadastro" element={<Register/>}></Route>
          <Route path="/hoje" element={<Today />}></Route>
          <Route path="/habitos" element={<HabitsList/>}></Route>
          <Route path="/historico" element={<Historic/>}></Route>            
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

