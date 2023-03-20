import styled from 'styled-components'
import { Link } from "react-router-dom"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Context from '../../Context'
import { useContext } from 'react'

export default function Menu(){
    const {progress} = useContext(Context);

    return (
        <Footer data-test="menu">
            <Link data-test="habit-link" to={"/habitos"} style={{textDecoration:"none"}}><h2>Hábitos</h2></Link>
            <Link data-test="today-link" to={"/hoje"}>
                <Blue>
                    <CircularProgressbar 
                        value={progress} 
                        text="Hoje"
                        styles={buildStyles({ 
                        textSize: "30px",
                        textColor: "#FFFFFF",
                        trailColor: "transparent",
                        pathColor:  "#FFFFFF",
                        backgroundColor: "#52B6FF"})} />
                </Blue>

            </Link>
            <Link data-test="history-link" to={"/historico"} style={{textDecoration:"none"}}><h2>Histórico</h2></Link>
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
    
`
const Blue=styled.div`
    width:90px;
    heigth: 90px;
    border-radius: 50%;
    background: #52B6FF;
    padding:8px;  
    position: absolute;
    bottom: 10px;
    left: 142px;
             
`
