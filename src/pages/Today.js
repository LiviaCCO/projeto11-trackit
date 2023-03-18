import styled from 'styled-components'
import Head from './components/Head'
import Menu from './components/Menu'
import dayjs from 'dayjs'
import {weekdays} from 'dayjs'
import { useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react'
import Context from '../Context'
import axios from 'axios';

//import 'dayjs/locale/es';

export default function Today(){

    const [user, setUser] = useContext(Context);
    console.log(user.token);
    const date = dayjs().locale('pt-br').format('DD/MM');
    
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }  

    const [listHabit, setListHabit] = useState([
        {habit: "Ler 1 capítulo de livro", sequence:"3", recorde:"5" }
    ]);
    const [concluded, setConcluded] = useState(false);
    const [did, setDid] = useState([]);

    /* var localeData = require('dayjs/plugin/localeData')
    dayjs.extend(localeData)
    dayjs().localeData() */
    //console.log(dayjs().weekday());
    
    //const params = useParams();
    //console.log(params);
    function check(event){
        if (concluded===false){
            setConcluded(true);
        }

    }

    useEffect(()=>{
        axios.get(url, config)
        .then(resp=>console.log(resp.data))
        .catch(err=>console.log(err.response.data))
    },[]);
    
    return(
        <>
        <Head />
        <ToDay>
                <h1 data-test="today">Segunda, {date} </h1>
                <h2 data-test="today-counter">{concluded ? (<span>67% dos hábitos concluídos</span>) : "Nenhum hábito concluído ainda"}</h2>
                {listHabit.map((h)=>
                    <HabitToday data-test="today-habit-container" key={h.habit}>
                        <p data-test="today-habit-name" >{h.habit}</p>
                        <h3 data-test="today-habit-sequence">Sequência atual: {h.sequence} dias</h3>
                        <h3 data-test="today-habit-record">Seu recorde: {h.recorde} dias</h3>
                        <ion-icon 
                        data-test="today-habit-check-btn" 
                        name="checkbox"
                        id={h.habit}
                        value={did.includes(h.habit)}
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
        color: {(props)=> props.value ? #8FC549 : #EBEBEB};
    }
`
