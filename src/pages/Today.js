import styled from 'styled-components'
import Head from './components/Head'
import Menu from './components/Menu'
import dayjs from 'dayjs'
import {weekdays} from 'dayjs'
import { useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react'
import Context from '../Context'
import axios from 'axios';



export default function Today(){

    const [user, setUser] = useContext(Context);
    const date = dayjs().locale('pt-br').format('DD/MM');
    const indexWeekday = new Date().getDay();
    const weekdayList = ["Domingo",, "Segunda-feira", "terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const weekday = weekdayList[indexWeekday];
    
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    const [habitList, setHabitList] = useState([]);
    const [concluded, setConcluded] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [taskId, setTaskId] = useState([]);
    const [done, setDone] = useState([]);
    const progress = ((taskId.length/habitList.length)*100).toFixed(2);

    function sucessCheck(e, did){

        if (did === "false"){
            const newTaskId = [...taskId, e];
            setTaskId(newTaskId);
            setRefresh(!refresh);
        }else{
            const newTaskId = taskId.filter(id=>id!==e);
            setTaskId(newTaskId);
            setRefresh(!refresh);
        }
        

    }

    function check(event){
        const idHabit = event.target.id;
        const did = event.target.color;
        const targ = event.target;
        console.log("id", idHabit);
        console.log("color", did);
        console.log("icon", targ);

        if(did==="false"){
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabit}/check`, [], config)
            .then(sucessCheck(idHabit, did))
            .catch(err=>console.log(err.response.data));
        }else{ 
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabit}/uncheck`, [], config)
            .then(sucessCheck(idHabit, did))
            .catch(err=>console.log(err.response.data));
        }
    }
    

    useEffect(()=>{
        axios.get(url, config)
        .then(resp=>setHabitList(resp.data))
        .catch(err=>console.log(err.response.data))
    },[habitList, refresh]);

    if(habitList.length===0){
        return(
            <>
            <Head />
            <ToDay>
                <h2>Você não tem nenhum hábito cadastrado para hoje.</h2>
            </ToDay>
            <Menu />
            </>
        )
    }
    
    return(
        <>
        <Head />
        <ToDay>
                <h1 data-test="today">{weekday}, {date} </h1>
                <h2 data-test="today-counter">{(progress!==0) ? (<span>{progress}% dos hábitos concluídos</span>) : "Nenhum hábito concluído ainda"}</h2>
                {habitList.map((h)=>
                    <HabitToday data-test="today-habit-container" key={h.id}>
                        <p data-test="today-habit-name">{h.name}</p>
                        <h3 data-test="today-habit-sequence">Sequência atual: <span> {h.currentSequence} dias</span></h3>
                        <h3 data-test="today-habit-record">
                            Seu recorde: {h.currentSequence === h.highestSequence ? 
                            <span>{h.highestSequence} dias</span> : <>{h.highestSequence} dias</> } </h3>  
                        <ion-icon 
                        data-test="today-habit-check-btn" 
                        name="checkbox"
                        color={h.done}
                        id={h.id}
                        onClick={(e)=>check(e)}/>
                    </HabitToday>
                )}
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
    span{
        color: #8FC549;
    }
    h2{
        color: #BABABA";
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
        color: ${(props)=> props.color ? "#8FC549" : "#EBEBEB"};
    }
    span{
        color: ${props => props.color ? "#8FC549" : ""}
    }
`
