import foto from '../assets/foto.png'
import TrackIt from '../assets/TrackIt.png'
import elipse from '../assets/elipse.png'
import group from '../assets/group.png'
import Hoje from '../assets/Hoje.png'
import styled from 'styled-components'
//import { Link } from "react-router-dom"


export default function Habits(){
    const buttons = ["D","S","T","Q","Q","S","S"];
    
    return(
        <>
        <Header>
            <img src={TrackIt} alt={TrackIt}/>
            <img src={foto} alt={foto}/>
        </Header>
        <Pages>
            {/* {<HabitsList>
                <Add>
                    <h1>Meus hábitos</h1>
                    <button>+</button>
                </Add>
                <NewHabit>
                    <input type="text" id="habitoNovo" name="habitoNovo" required placeholder="nome do hábito"/>
                    <WeekDays>
                        {buttons.map((d)=>
                            <button value="day">{d}</button>
                        )}
                    </WeekDays>
                    <CancelSalve>
                        <button value="cancel">Cancelar</button>
                        <button value="salve">Salvar</button>
                    </CancelSalve>
                    
                </NewHabit>
                <Habit>
                    <p>Ler 1 capítulo de livro</p>
                    <ion-icon name="trash-outline"></ion-icon>
                    <WeekDays>
                        {buttons.map((d)=>
                            <button value="day">{d}</button>
                        )}
                    </WeekDays>
                </Habit>
                <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>

            </HabitsList>} */}

            <Today>
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
                            
            </Today>
             
           {/*  <Historic>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </Historic> */}
        </Pages>
        <Footer>
            <p>Hábitos</p>
                <img src={Hoje} alt={Hoje}/>
                <img src={group} alt={group}/>
                <img src={elipse} alt={elipse}/>
            <p>Histórico</p>
        </Footer>
        </>
        
    )

}
const Pages=styled.div`
    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    h2{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-top: 28px;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;        
        color: #666666;
    }
`
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
const HabitsList = styled.div`
    background: #E5E5E5;
    width: 375px;
    height: 700px;
    padding: 28px 17px;
/*     h2{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-top: 28px;
    }
 */`
const Add = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom: 20px;

    /* h1{
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    } */
    button{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
    }
`
const NewHabit=styled.div`
    width: 340px;
    height: 180px;
    padding: 18px;
    background: #FFFFFF;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;

    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        &::placeholder{
            color: #DBDBDB;
        }
    }
   
`
const WeekDays=styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 8px;
    button{
        width: 30px;
        height: 30px;
        background: #FFFFFF;
        color: #DBDBDB;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }
`
const CancelSalve = styled.div`
    display:flex;
    justify-content: flex-end;
    margin-top:20px;
    gap:10px;

    button{
        &:nth-child(1){
            width: 104px;
            height: 35px;
            background: #FFFFFF;
            color:#52B6FF;
            border: none;
        }
        &:nth-child(2){
            width: 84px;
            height: 35px;
            background: #52B6FF;
            border-radius: 4.63636px;
        } 
    }
`
const Habit = styled(NewHabit)`
    height:91px;
    margin-top: 10px;
    padding: 15px;
    position: relative;
    /* p{
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;        
        color: #666666;
    } */
    ion-icon{
        position: absolute;
        left: 10px;
        top: 10px;
    }
`
const HabitToday=styled(Habit)`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    color: red;
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
const Today=styled(HabitsList)`
    h3{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`
const Historic=styled(HabitsList)`
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