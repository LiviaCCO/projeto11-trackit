import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components'
import Context from '../Context';
import Head from './components/Head'
import Menu from './components/Menu'

export default function HabitsList(){
    const [list, setList] = useState([]);
    const buttons = ["D","S","T","Q","Q","S","S"];
    const [add, setAdd] = useState(false);
    const [days, setDays] = useState([]);
    const [isSelect, setIsSelect] = useState(false);
    const [task, setTask] = useState('');
    const [start, setStart] = useState(true);
    const [refresh, setRefresh]=useState(false);

    const {user, setUser} = useContext(Context);
    const body={name:task, days};
    const urlGet = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const urlPost = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    } 

    function toList(event){
        setList(event);
    }

    useEffect(()=>{
        axios.get(urlGet, config)
        .then(resp=>toList(resp.data))
        .catch(err=>console.log(err.response.data))
    }, [start, refresh]);

    function getList(list){
        console.log(list)
        setDays([]);
        setTask("");
        setAdd(false);
        setStart(!start);
    }

    function save(){
        axios.post(urlPost,body, config)
        .then(resp=>getList(resp.data))
        .catch(err=>alert(err.response.data));
    }
    
    function cancel(){
        setAdd(false);
    }

    function selectDay(e){
        const newDay = e.target.id;
        console.log(e.target)

        if(!days.includes(newDay)){
            const newD = [...days, newDay];
            setDays(newD);
            setIsSelect(!isSelect);
        } 
        else{
            const newDays = days.filter(day=>day!==newDay);
            setDays(newDays);
        }
    }

    if (list.length === 0){
        return(
            <>
            <Head />  
            <HabitList>   
                <Add>
                    <h1>Meus hábitos</h1>
                    <button data-test="habit-create-btn" onClick={()=>setAdd(!add)}>+</button>
                </Add>         
                {add ?
                    <NewHabit data-test="habit-create-container" >
                        <input 
                        data-test="habit-name-input" 
                        type="text" 
                        id="habitoNovo" 
                        name="habitoNovo"
                        value={task}
                        onChange={(e)=>setTask(e.target.value)}
                        required 
                        placeholder="nome do hábito"/>
                        <WeekDays>
                            {buttons.map((d, index)=>
                                <button data-test="habit-day" 
                                key={index} 
                                id={index} 
                                value={days.includes(index)} 
                                onClick={(e)=>selectDay(e)}>{d}</button>
                            )}
                        </WeekDays>
                        <CancelSalve>
                            <button data-test="habit-create-cancel-btn" value="cancel" onClick={cancel}>Cancelar</button>
                            <button data-test="habit-create-save-btn" value="salve" onClick={save}>Salvar</button>
                        </CancelSalve>
                    </NewHabit>
                    : ""
                    }
                    <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
                </HabitList>  
            <Menu />
            </>
        )
    }

    function trash(e){
        const url=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${e.id}`;
        axios.delete(url, config)
        .then(setRefresh(!refresh))
        .catch(err=>console.log(err.response.data));
    }
    
    return (
        <>
        <Head />
        <HabitList>
                <Add>
                    <h1>Meus hábitos</h1>
                    <button data-test="habit-create-btn" onClick={()=>setAdd(!add)}>+</button>
                </Add>         
                {add ?
                    <NewHabit data-test="habit-create-container" >
                        <input 
                        data-test="habit-name-input" 
                        type="text" 
                        id="habitoNovo" 
                        name="habitoNovo"
                        value={task}
                        onChange={(e)=>setTask(e.target.value)}
                        required 
                        placeholder="nome do hábito"/>
                        <WeekDays>
                            {buttons.map((d, index)=>
                                <button data-test="habit-day" id={index} value={days.includes(index)} onClick={(e)=>selectDay(e)}>{d}</button>
                            )}
                        </WeekDays>
                        <CancelSalve>
                            <button data-test="habit-create-cancel-btn" value="cancel" onClick={cancel}>Cancelar</button>
                            <button data-test="habit-create-save-btn" value="salve" onClick={save}>Salvar</button>
                        </CancelSalve>
                    </NewHabit>
                    : ""
                    }
                
                {list.map((t)=>
                <Habit data-test="habit-container" key={t.id}>
                    <p data-test="habit-name">{t.name}</p>
                    <ion-icon 
                    data-test="habit-delete-btn" 
                    name="trash-outline" 
                    onClick={() => {window.confirm('Tem certeza que deseja excluir este hábito?',) && trash(t) }}>
                    </ion-icon>
                    <WeekDays>
                        {buttons.map((d, index)=>
                            <button data-test="habit-day" value={(t.days).includes(index)}>{d}</button>
                        )}
                    </WeekDays>
                </Habit>
                )}
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
        color: ${props=> props.value ? "#FFFFFF" : "#DBDBDB"};
        background: ${(props) => props.value ? "#CFCFCF" : "#FFFFFF"};
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
