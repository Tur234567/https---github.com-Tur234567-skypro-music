import React from 'react';
import * as S from "../../App.js";
import * as SR from "./indexCss.js"
import { Link } from 'react-router-dom';
export const Register = () => {

    const loginValue = false;

    function toggleLog() {
       localStorage.setItem('token', !loginValue);
    }

    return (
        <S.DivWrapper className="wrapper">
      <S.DivContainer className="container">
        <Link to='/'><SR.button onClick={toggleLog()}>Регистрация</SR.button></Link>
      </S.DivContainer>
    </S.DivWrapper>
    )
}