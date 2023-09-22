import "../../App.css";
import * as S from "../../App.js";
import React from "react";
import mainNav from "../../components/musicBlock.jsx";
import search from "../../components/centerBlockSearch.jsx";
import filter from "../../components/centerBlockFilter.jsx";
import centerContent from "../../components/cntrcontent.jsx";
import cntrBar from "../../components/bar.jsx";
import sidebar from "../../components/sideBar.jsx";
import footer from "../../components/footer.jsx";
import AuthPage from "../loginApi/AuthPage";
export const Main = () => {
    return (
      localStorage.getItem('token') ? 
        <S.DivWrapper className="wrapper">
      <S.DivContainer className="container">
        <S.DivMain className="main">
        {mainNav()}
          <S.DivMainCenterBlock className="main__centerblock centerblock">
            {search()}
            <S.DivMainCenterBlockH2 className="centerblock__h2">Треки</S.DivMainCenterBlockH2>
            {filter()}
            {centerContent()}
          </S.DivMainCenterBlock>
          {sidebar()}
        </S.DivMain>
        {cntrBar()}
        {footer()}
      </S.DivContainer>
    </S.DivWrapper>
    : 
    <AuthPage></AuthPage>
    )
}