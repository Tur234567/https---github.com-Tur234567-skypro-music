import "../../App.css";
import * as S from "../../App.js";
import React from "react";
import MainNav from "../../components/musicBlock.jsx";
import SearchBar from "../../components/centerBlockSearch.jsx";
import FilterBar from "../../components/centerBlockFilter.jsx";
import CenterContent from "../../components/cntrcontent.jsx";
import SideBar from "../../components/sideBar.jsx";
import FooterBar from "../../components/footer.jsx";
import AuthPage from "../loginApi/AuthPage";

export const Main = () => {
    return (
      localStorage.getItem('token') ? 
        <S.DivWrapper className="wrapper">
      <S.DivContainer className="container">
        <S.DivMain className="main">
        <MainNav/>
          <S.DivMainCenterBlock className="main__centerblock centerblock">
            <SearchBar/>
            <S.DivMainCenterBlockH2 className="centerblock__h2">Треки</S.DivMainCenterBlockH2>
           <FilterBar/>
            <CenterContent/>
          </S.DivMainCenterBlock>
          <SideBar/>
        </S.DivMain>
        <FooterBar/>
      </S.DivContainer>
    </S.DivWrapper>
    : 
    <AuthPage/>
    )
}