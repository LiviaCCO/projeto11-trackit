import foto from '../../assets/foto.png'
import TrackIt from '../../assets/TrackIt.png'
import styled from 'styled-components'

export default function Head(){
    return(
        <Header data-test="header">
            <img src={TrackIt} alt={TrackIt}/>
            <img src={foto} alt={foto}/>
        </Header>
    )
}

const Header=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 375px;
    height: 70px;
    padding: 10px 18px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    img{
        &:nth-child(1){
            width: 97px;
        &:nth-child(0){
            width: 51px;
            height: 51px;
        }
    }
`