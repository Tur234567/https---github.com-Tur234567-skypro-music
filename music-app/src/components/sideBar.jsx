import React, { useContext } from "react";
import { valueFunc } from "./cntrcontent.jsx";
import * as S from "./sideBar";
import { Link } from "react-router-dom";
import { UserContext } from "../App.jsx";

function toggleLocalStorage() {
  localStorage.clear();
  window.location.reload()
}

function SideBar() {
  const theme = useContext(UserContext);
    return (
        <S.BarMain className="main__sidebar sidebar">
        <S.DivPersonal className="sidebar__personal">
        <S.PersonalName className="sidebar__personal-name">{theme}</S.PersonalName>
          <S.icon className="sidebar__icon" onClick={toggleLocalStorage}>
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
          </S.icon>
        </S.DivPersonal>
        <S.BarBlock className="sidebar__block">
          <S.BarList className="sidebar__list">
            <S.BarItem className="sidebar__item">
              <Link className='Link' to="/category/1">
              <S.BarLink className="sidebar__link" href="#">
                <S.BarImg
                  className="sidebar__img"
                  src={"/img/playlist01"+ valueFunc + ".png"}
                  alt="day's playlist"
                />
              </S.BarLink>
              </Link>
            </S.BarItem>
            <S.BarItem className="sidebar__item">
              <Link className='Link' to="/category/2">
              <S.BarLink className="sidebar__link" href="#">
                <S.BarImg
                  className="sidebar__img"
                  src={"/img/playlist02"+ valueFunc + ".png"}
                  alt="day's playlist"
                />
              </S.BarLink>
              </Link>
            </S.BarItem>
            <S.BarItem className="sidebar__item">
              <Link className='Link' to="/category/3">
              <S.BarLink className="sidebar__link" href="#">
                <S.BarImg
                  className="sidebar__img"
                  src={"/img/playlist03"+ valueFunc + ".png"}
                  alt="day's playlist"
                />
              </S.BarLink>
              </Link>
            </S.BarItem>
          </S.BarList>
        </S.BarBlock>
      </S.BarMain>
    );
}
export default SideBar