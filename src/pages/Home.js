import logo from '../assets/logo.png'
import styled from 'styled-components'
import { useNavigate, Link } from "react-router-dom"
import {useState} from 'react';
import axios from 'axios';

export default function Home(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function goIn(event){
        event.preventDefault();
        const url="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const body={email, password};
        axios.post(url, body)
            .then(()=>navigate("/hoje"))
            .catch(err => alert(`Erro ${err.response.status}`))
        
    }

    return(
        <Page1>
        <img src={logo} alt={logo}/>
        <Form onSubmit={goIn}>
            <input 
            type="text" 
            id="email" 
            name="email" 
            required 
            placeholder="email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}/>
            <input 
            type="password" 
            id="senha" 
            name="senha" 
            required 
            placeholder="senha" 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit" value="Submit">Entrar</button>
        </Form>
        <Link to={"/cadastro"}>
            <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
        </Page1>
    )
}

const Page1=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    padding: 68px 36px;
    aling-items: center;
    img{
        width: 180px;
        height: 180px;
        margin-bottom: 32px;
    }
    p{
        margin-top: 25px;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
    
`
const Form = styled.form`
    width: 303px;
	
`