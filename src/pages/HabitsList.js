import styled from 'styled-components'

export default function HabitsList(){
    const buttons = ["D","S","T","Q","Q","S","S"];

    return (
        <HabitList>
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

            </HabitList>
    )
}

const HabitList = styled.div`
    background: #E5E5E5;
    width: 375px;
    height: 700px;
    padding: 28px 17px;
    h2{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-top: 28px;
    }
`

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
