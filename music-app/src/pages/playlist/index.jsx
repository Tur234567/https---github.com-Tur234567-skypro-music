import React, { useEffect } from 'react';
import * as S from "../../App.js";
import AuthPage from '../loginApi/AuthPage.jsx';
import MainNav from "../../components/musicBlock.jsx";
import SearchBar from "../../components/centerBlockSearch.jsx";
import FilterBar from "../../components/centerBlockFilter.jsx";
import SideBar from "../../components/sideBar.jsx";
import FooterBar from "../../components/footer.jsx";
import { likeTrack } from '../../api.js';
import CenterContent from '../../components/cntrcontent.jsx';
export let toggleStatusPlaylist;

export const Playlist = () => {
  useEffect(() => {
    toggleStatusPlaylist = true;
    setTimeout(() => {
      toggleStatusPlaylist = false;
    }, 1000);
  }, [])
  useEffect(() => {
    setTimeout(() => {
      likeTrack().then((e) => {
        console.log(e);
      });
    }, 500);
  })
  return (
    localStorage.getItem('token') ? 
      <S.DivWrapper className="wrapper">
    <S.DivContainer className="container">
      <S.DivMain className="main">
      <MainNav/>
        <S.DivMainCenterBlock className="main__centerblock centerblock">
          <SearchBar/>
          <S.DivMainCenterBlockH2 className="centerblock__h2">Мои треки</S.DivMainCenterBlockH2>
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