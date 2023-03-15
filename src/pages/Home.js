import logo from '../assets/logo.png'
import styled from 'styled-components'
//import { Link } from "react-router-dom"


export default function Home(){

    function goIn(){
        console.log("Entrou");
    }

    return(
        <Page1>
        <img src={logo} alt={logo}/>
        <Form onSubmit={goIn}>
            <input type="text" id="email" name="email" required placeholder="email"/>
            <input type="password" id="senha" name="senha" required placeholder="senha"/>
            <button type="submit" value="Submit">Entrar</button>
        </Form>
{/*         <Link to={`/page2`}> */}
            <p>Não tem uma conta? Cadastre-se!</p>
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
    
`
const Form = styled.form`
    width: 303px;
	
`