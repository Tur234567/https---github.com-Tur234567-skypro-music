import React from 'react';
import * as S from "../../App.js";
import { Link } from 'react-router-dom';
export const Playlist = () => {
    return (
      localStorage.getItem('token') ? 
      <S.DivWrapper className="wrapper">
      <S.DivContainer className="container">
        <h1>Мой Плейлист</h1>
      </S.DivContainer>
    </S.DivWrapper>
    : 
    <S.DivWrapper className="wrapper">
      <S.DivContainer className="container">
        <Link to='/login'><h1>Авторизоваться</h1></Link>
      </S.DivContainer>
    </S.DivWrapper>
    )
}