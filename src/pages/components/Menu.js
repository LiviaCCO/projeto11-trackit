import elipse from '../../assets/elipse.png'
import group from '../../assets/group.png'
import Hoje from '../../assets/Hoje.png'
import styled from 'styled-components'
import { Link } from "react-router-dom"

export default function Menu(){
    return (
        <Footer data-test="menu">
            <Link data-test="habit-link" to={"/habitos"}><h2>Hábitos</h2></Link>
            <Link data-test="today-link" to={"/hoje"}>
                <img src={elipse} alt={elipse}/>
                <img src={Hoje} alt={Hoje}/>
                <img src={group} alt={group}/>
                
            </Link>
            <Link data-test="history-link" to={"/historico"}><h2>Histórico</h2></Link>
        </Footer>
    )
}

const Footer=styled.div`
    position: fixed;
    bottom: 0px;
    left: 0px;
    padding: 26px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 375px;
    height: 70px;
    background: #FFFFFF; 
    h2{
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
        &:nth-child(1){
            position: absolute;
            bottom: 10px;
            left: 142px;
            
        } 
    }
`