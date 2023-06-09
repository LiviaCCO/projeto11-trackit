import logo from '../assets/logo.png';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

export default function Register(){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function access(event){
        event.preventDefault();
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const body = {email, name, image, password};

        console.log(body);
            axios
            .post(url, body)
            .then(()=>navigate("/"))
            .catch(err=>alert(`Erro ${err.response.data.message}`));
    }

    return(
        <Page1>
        <img src={logo} alt={logo}/>
        <Form onSubmit={access}>
            <input
            data-test="email-input"
            type="email" 
            id="email" 
            name="email" 
            required 
            placeholder="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}/>
            <input 
            data-test="password-input"
            type="password"
            id="senha"
            name="senha" 
            required 
            placeholder="senha" 
            value={password} 
            onChange={e => setPassword(e.target.value)}/>
            <input 
            data-test="user-name-input"
            type="text" 
            id="nome" 
            name="nome" 
            required 
            placeholder="nome" 
            value={name} 
            onChange={e => setName(e.target.value)}/>
            <input 
            data-test="user-image-input"
            type="text" 
            id="foto" 
            name="foto" 
            required 
            placeholder="foto" 
            value={image} 
            onChange={e => setImage(e.target.value)}/>
            <button 
            data-test="signup-btn"
            type="submit" 
            value="Submit">Cadastrar</button>
        </Form>
        <Link data-test="login-link" to={"/"}> 
            <p>Já tem uma conta? Faça login!</p>
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
    /* button{
        margin: auto;
    } */
`
const Form = styled.form`
    width: 303px;
`