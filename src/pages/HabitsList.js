import styled from 'styled-components'
import Head from './components/Head'
import Menu from './components/Menu'

export default function HabitsList(){
    const buttons = ["D","S","T","Q","Q","S","S"];

    return (
        <>
        <Head />
        <HabitList>
                <Add>
                    <h1>Meus hábitos</h1>
                    <button data-test="habit-create-btn">+</button>
                </Add>
                <NewHabit data-test="habit-create-container" >
                    <input 
                    data-test="habit-name-input" 
                    type="text" 
                    id="habitoNovo" 
                    name="habitoNovo" 
                    required 
                    placeholder="nome do hábito"/>
                    <WeekDays>
                        {buttons.map((d)=>
                            <button data-test="habit-day" value="day">{d}</button>
                        )}
                    </WeekDays>
                    <CancelSalve>
                        <button data-test="habit-create-cancel-btn" value="cancel">Cancelar</button>
                        <button data-test="habit-create-save-btn"  value="salve">Salvar</button>
                    </CancelSalve>
                    
                </NewHabit>
                <NewHabit data-test="habit-create-container" >
                    <input 
                    data-test="habit-name-input" 
                    type="text" 
                    id="habitoNovo" 
                    name="habitoNovo" 
                    required 
                    placeholder="nome do hábito"/>
                    <WeekDays>
                        {buttons.map((d)=>
                            <button data-test="habit-day" value="day">{d}</button>
                        )}
                    </WeekDays>
                    <CancelSalve>
                        <button data-test="habit-create-cancel-btn" value="cancel">Cancelar</button>
                        <button data-test="habit-create-save-btn"  value="salve">Salvar</button>
                    </CancelSalve>
                    
                </NewHabit>
                
                <Habit data-test="habit-container">
                    <p data-test="habit-name">Ler 1 capítulo de livro</p>
                    <ion-icon data-test="habit-delete-btn" name="trash-outline"></ion-icon>
                    <WeekDays>
                        {buttons.map((d)=>
                            <button data-test="habit-day" value="day">{d}</button>
                        )}
                    </WeekDays>
                </Habit>
                <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
            </HabitList>
            <Menu />
            </>
    )
}

const HabitList = styled.div`
    background: #E5E5E5;
    width: 375px;
    height: 700px;
    padding: 28px 17px;
    h2{
        margin-top: 29px;
    }
`
const Add = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom: 20px;
    button{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-size: 26.976px;
        line-height: 34px;
        color: #FFFFFF;
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
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: #666666;
        &::placeholder{
            color: #DBDBDB;
        }
    }
   
`
const WeekDays=styled.div`
    display:flex;
    gap: 4px;
    margin-top: 8px;
    button{
        width: 30px;
        height: 30px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding:0px;
    }
`
const CancelSalve = styled.div`
    display:flex;
    justify-content: flex-end;
    margin-top:20px;
    gap:10px;

    button{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;

        &:nth-child(1){
            width: 94px;
            height: 35px;
            background: #FFFFFF;
            color:#52B6FF;
            border: none;
        }
        &:nth-child(2){
            width: 74px;
            height: 35px;
            background: #52B6FF;
            color: #FFFFFF;
            border-radius: 4.63636px;
        } 
    }
`
const Habit = styled(NewHabit)`
    height:91px;
    margin-top: 10px;
    padding: 15px;
    position: relative;
    ion-icon{
        position: absolute;
        right: 10px;
        top: 10px;
    }
`
