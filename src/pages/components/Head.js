import TrackIt from '../../assets/TrackIt.png'
import styled from 'styled-components'
import { useContext } from 'react';
import Context from '../../Context';

export default function Head(){
    const {user} = useContext(Context);

    return(
        <Header data-test="header">
            <img src={TrackIt} alt={TrackIt}/>
            <Foto><img src={user.image} alt={user.name} /></Foto>
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
        &:nth-child(2){
            width: 97px;
    }
`
const Foto = styled.div`
    width: 50px;
    height: 50px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
` 