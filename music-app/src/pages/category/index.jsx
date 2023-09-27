import React from 'react';
import * as S from "../../App.js";
import { useParams } from 'react-router-dom';
import AuthPage from '../loginApi/AuthPage.jsx';


export const Category = () => {  
    const params = useParams();
      return ( 
        localStorage.getItem('token') ? 
      <S.DivWrapper className="wrapper">
      <S.DivContainer className="container">
        <h1>Категория {Number(params.id)}</h1>
      </S.DivContainer>
    </S.DivWrapper> 
    : 
    <AuthPage></AuthPage>
    )
}