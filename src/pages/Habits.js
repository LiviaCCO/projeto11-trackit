import foto from '../assets/foto.png'
import TrackIt from '../assets/TrackIt.png'
import elipse from '../assets/elipse.png'
import group from '../assets/group.png'
import Hoje from '../assets/Hoje.png'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Today from './Today'
import Historic from './Historic'
import HabitsList from './HabitsList'
import { Link } from "react-router-dom"


export default function Habits(){    
    return(
        <BrowserRouter>
        <Header>
            <img src={TrackIt} alt={TrackIt}/>
            <img src={foto} alt={foto}/>
        </Header>
        <Routes>
            <Route path="/habitos" element={<HabitsList />}></Route>
            <Route path="/hoje" element={<Today />}></Route>
            <Route path="/historico" element={<Historic />}></Route>            
        </Routes>

        <Footer>
            <Link to={"/habitos"}><p>Hábitos</p></Link>
            <Link to={"/hoje"}>
                <img src={Hoje} alt={Hoje}/>
                <img src={group} alt={group}/>
                <img src={elipse} alt={elipse}/>
            </Link>
            <Link to={"/historico"}><p>Histórico</p></Link>
        </Footer>
        </BrowserRouter>
        
    )

}

const Header=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 375px;
    height: 70px;
    padding: 10px 18px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    img{
        &:nth-child(1){
            width: 97px;
            height: 39px;            
        }
        &:nth-child(0){
            width: 51px;
            height: 51px;
        }
    }
`
const Footer=styled.div`
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 375px;
    height: 70px;
    background: #FFFFFF; 
    p{
        margin-left: 30px;
        margin-right: 30px;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    img{
        &:nth-child(2){
            position: absolute;
            bottom: 48px;
            left: 167px;
            z-index:1;
        }
        &:nth-child(3){
            position: absolute;
            bottom: 16px;
            left: 158px;
            z-index: 1;
        } 
        &:nth-child(4){
            position: absolute;
            bottom: 10px;
            left: 142px;
            
        } 
    }
`