import React from "react";
import * as S from "./musicBlock";

const { useState } = React;

function mainNav() {

  const [visible, setVisible] = useState(false);
  
  const toggleVisible = () => setVisible(!visible);

    return (
        <S.MainNav className="main__nav nav">
            <S.LogoNav className="nav__logo logo">
              <S.MenuLogoImg className="logo__image" src="/img/logo.png" alt="logo" />
            </S.LogoNav>
            <S.BurgerNav className="nav__burger burger burger-click" onClick={toggleVisible}>{visible}
              <S.MenuBurgerLine className="burger__line"></S.MenuBurgerLine>
              <S.MenuBurgerLine className="burger__line"></S.MenuBurgerLine>
              <S.MenuBurgerLine className="burger__line"></S.MenuBurgerLine>
            </S.BurgerNav>
            {visible && (
              <S.MenuNav className="nav__menu menu">
              <S.MenuList className="menu__list">
                <S.MenuItem className="menu__item">
                  <S.MenuLink href="#" className="menu__link">
                    Главное
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem className="menu__item">
                  <S.MenuLink href="#" className="menu__link">
                    Мой плейлист
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem className="menu__item">
                  <S.MenuLink href="../signin.html" className="menu__link">
                    Войти
                  </S.MenuLink>
                </S.MenuItem>
              </S.MenuList>
            </S.MenuNav>
            )}
          </S.MainNav>
          );
}

export default mainNav;