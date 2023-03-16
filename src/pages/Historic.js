import styled from 'styled-components' 

export default function Historic(){
    return (
        <Hist>
            <h1>Histórico</h1>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </Hist> 
    )
}

const Hist=styled.div`
    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    h2{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-top: 28px;
    }
    background: #E5E5E5;
    width: 375px;
    height: 700px;
    padding: 28px 17px;
`