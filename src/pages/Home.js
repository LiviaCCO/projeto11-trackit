import logo from '../assets/logo.png'
import styled from 'styled-components'


export default function Home(){

    function goIn(){
        console.log("Entrou");
    }

    return(
        <Page1>
        <img src={logo} alt={logo}/>
        <form onSubmit={goIn}>
            <input type="text" id="email" name="email" required placeholder="email"/>
            <input type="text" id="senha" name="senha" required placeholder="senha"/>
            <button type="submit" value="Submit">Entrar</button>
        </form>
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
    }
    button{
        margin: auto;
    }
`