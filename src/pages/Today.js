import styled from 'styled-components'
import Head from './components/Head'
import Menu from './components/Menu'

export default function Today(){
    return(
        <>
        <Head />
        <ToDay>
                <h1>Segunda, 17/05 </h1>
                <h2>Nenhum hábito concluído ainda</h2>
                <HabitToday>
                    <p>Ler 1 capítulo de livro</p>
                    <h3>Sequência atual: 3 dias</h3>
                    <h3>Seu recorde: 5 dias</h3>
                    <ion-icon name="checkbox"/>
                </HabitToday>   
                <HabitToday>
                    <p>Ler 1 capítulo de livro</p>
                    <h3>Sequência atual: 3 dias</h3>
                    <h3>Seu recorde: 5 dias</h3>
                    <ion-icon name="checkbox"/>
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
