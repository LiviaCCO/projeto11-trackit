import styled from 'styled-components'

export default function Today(){
    return(
        <ToDay>
                <h1>Segunda, 17/05 </h1>
                <h3>Nenhum hábito concluído ainda</h3>
                <HabitToday>
                    <Info>
                        <p>Ler 1 capítulo de livro</p>
                        <h4>Sequência atual: 3 dias</h4>
                        <h4>Seu recorde: 5 dias</h4>
                    </Info>
                    <Check><ion-icon name="checkbox"/></Check>
                </HabitToday>
                            
        </ToDay>
    )
}

const ToDay=styled.div`
    background: #E5E5E5;
    width: 375px;
    height: 700px;
    padding: 28px 17px;
    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;        
        color: #666666;
    }
    h3{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`
//limpar este
const HabitToday=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    color: red;
    height:91px;
    margin-top: 10px;
    padding: 15px;
    position: relative;
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;        
        color: #666666;
    } 
    ion-icon{
        position: absolute;
        left: 10px;
        top: 10px;
    }
`
const Info=styled.div`
    display:flex;
    flex-direction:column;
    h4{
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`
const Check=styled.div`
    width: 69px;
    height: 69px;
    ion-icon{
        /* font-size: 69px; */
        color: #EBEBEB;
        /* border: 1px solid #E7E7E7; */
        border-radius: 5px;
    }
`
