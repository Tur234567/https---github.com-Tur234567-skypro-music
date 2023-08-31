import React from 'react';
import * as S from "../../App.js";
import * as SL from "./indexCss.js";
import { Link } from 'react-router-dom';

export const Login = () => {

    const loginValue = false;

    function toggleLog() {
       localStorage.setItem('token', !loginValue);
    }
    
    return (
        <S.DivWrapper className="wrapper">
      <S.DivContainer className="container">
        <Link to="/"><SL.button onClick={toggleLog}>Войти</SL.button></Link>
        <br />
        <Link to="/register"><SL.buttonReg>Или зарегистрируйтесь</SL.buttonReg></Link>
      </S.DivContainer>
    </S.DivWrapper>
    )
}