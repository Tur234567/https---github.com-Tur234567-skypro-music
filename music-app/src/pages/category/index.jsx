import React from 'react';
import * as S from "../../App.js";
import { Link, useParams } from 'react-router-dom';

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
    <S.DivWrapper className="wrapper">
      <S.DivContainer className="container">
        <Link to='/login'><h1>Авторизоваться</h1></Link>
      </S.DivContainer>
    </S.DivWrapper>
    )
}