import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	*{box-sizing:border-box;}

	body{
		background: #FFFFFF;
		width: 100%;
		height: 100%;
		font-family: 'Lexend Deca', sans-serif;
		font-style: normal;
		font-weight: 400;
	}
	h1{
		font-size: 22.976px;
		line-height: 29px;
		color: #126BA5;
	}
	h2{
		font-size: 17.976px;
		line-height: 22px;
		color: #666666;
	}
	p{
        font-size: 19.976px;
        line-height: 25px;        
        color: #666666;
    }
	h3{
		font-size: 12.976px;
		line-height: 16px;
		color: #666666;
	}
	button {
		width: 100%;
		height: 45px;
		background: #52B6FF;
		border-radius: 4.63636px;
		font-family: 'Lexend Deca', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 20.976px;
		line-height: 26px;
		text-align: center;
		color: #FFFFFF;

		
		border-style: none;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0 20px;
		&:disabled {
			background-color: lightgray;
		}
	}
	input {
		background: #FFFFFF;
		width: 100%;
		height: 45px;
		border: 1px solid #D5D5D5;
		border-radius: 5px;
		font-family: 'Lexend Deca', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 19.976px;
		line-height: 25px;		

		margin-bottom: 6px;
		margin-top: 6px;
		padding: 0 10px;
		display: flex;
		align-items: center;
		color: #666666;
        &::placeholder{
            color: #DBDBDB;
        }
		
	}
	
`

export default GlobalStyle