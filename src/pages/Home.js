import logo from '../assets/logo.png'
import styled from 'styled-components'
import { useNavigate, Link } from "react-router-dom"
import {useContext, useState} from 'react';
import axios from 'axios';
import Context from '../Context';
import ThreeDots from 'react-spinners/DotLoader'

export default function Home(){

    const {user, setUser, progress} = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled]=useState(false);

    function go(e){
        //console.log(e.data);
        console.log("progress", progress);
        setUser(e.data);
        console.log("user",user);
        /* const newData = [e.data, {percentage: progress}]; 
        console.log(newData); */
        navigate("/hoje");
    }

    function goIn(event){
        setIsDisabled(!isDisabled)
        event.preventDefault();
        const url="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const body={email, password};
        const promise = axios.post(url, body)
        promise.then(resp=>go(resp))
        promise.catch(err => alert(`Erro ${err.response.data.message}`));
    }

    return(
        <Page1>
        <img src={logo} alt={logo}/>
        <Form onSubmit={goIn}>
            <input
            data-test="email-input"
            type="email" 
            id="email" 
            required 
            placeholder="email" 
            value={email} 
            disabled={isDisabled}
            onChange={(e)=>setEmail(e.target.value)}/>
            <input 
            data-test="password-input"
            type="password" 
            id="senha" 
            required 
            placeholder="senha" 
            value={password} 
            disabled={isDisabled}
            onChange={(e)=>setPassword(e.target.value)}/>
            
            <button data-test="login-btn" type="submit" value="Submit" /* onClick={setIsDisabled(!isDisabled)} */>
                {!isDisabled ? "Entrar" :
                <ThreeDots 
                height="20" 
                width="20" 
                radius="5" 
                color="#FFFFFF" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visibled={true}/> } 
            </button> 
            
        </Form>
        <Link data-test="signup-link" to={"/cadastro"}>
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