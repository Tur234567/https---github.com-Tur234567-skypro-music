import React from 'react';
import * as S from "../../App.js";
import AuthPage from '../loginApi/AuthPage.jsx';

export const Playlist = () => {
    return (
      localStorage.getItem('token') ? 
      <S.DivWrapper className="wrapper">
      <S.DivContainer className="container">
        <h1>Мой Плейлист</h1>
      </S.DivContainer>
    </S.DivWrapper>
    : 
    <AuthPage></AuthPage>
    )
}