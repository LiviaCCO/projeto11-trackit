import styled from 'styled-components'
import Head from './components/Head'
import Menu from './components/Menu'

export default function Today(){
    return(
        <>
        <Head />
        <ToDay>
                <h1 data-test="today">Segunda, 17/05 </h1>
                <h2 data-test="today-counter">Nenhum hábito concluído ainda</h2>
                <HabitToday data-test="today-habit-container">
                    <p data-test="today-habit-name" >Ler 1 capítulo de livro</p>
                    <h3 data-test="today-habit-sequence">Sequência atual: 3 dias</h3>
                    <h3 data-test="today-habit-record">Seu recorde: 5 dias</h3>
                    <ion-icon data-test="today-habit-check-btn" name="checkbox"/>
                </HabitToday>  
                <HabitToday data-test="today-habit-container">
                    <p data-test="today-habit-name" >Ler 1 capítulo de livro</p>
                    <h3 data-test="today-habit-sequence">Sequência atual: 3 dias</h3>
                    <h3 data-test="today-habit-record">Seu recorde: 5 dias</h3>
                    <ion-icon data-test="today-habit-check-btn" name="checkbox"/>
                </HabitToday>   
        </ToDay>
        <Menu />
        </>
    )
}

const ToDay=styled.div`
    background: #E5E5E5;
    width: 375px;
    height: 700px;
    padding: 28px 17px;
    h2{
        color: #BABABA;
        margin-bottom: 28px;
    }
`
const HabitToday=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;

    margin-top: 10px;
    padding: 15px;
    position: relative;
    ion-icon{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 75px;
        color: #EBEBEB;
    }
`
