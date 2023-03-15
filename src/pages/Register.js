import logo from '../assets/logo.png'
import styled from 'styled-components'
//import { Link } from "react-router-dom"


export default function Register(){

    function access(){
        console.log("Entrou");
    }

    return(
        <Page1>
        <img src={logo} alt={logo}/>
        <Form onSubmit={access}>
            <input type="text" id="email" name="email" required placeholder="email"/>
            <input type="password" id="senha" name="senha" required placeholder="senha"/>
            <input type="text" id="nome" name="nome" required placeholder="nome"/>
            <input type="text" id="foto" name="foto" required placeholder="foto"/>
            <button type="submit" value="Submit">Cadastrar</button>
        </Form>
{/*         <Link to={`/page2`}> */}
            <p>Já tem uma conta? Faça login!</p>
        {/* </Link> */}
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