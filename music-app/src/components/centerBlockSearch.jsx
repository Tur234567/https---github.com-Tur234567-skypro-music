import React from "react";
import * as S from "./centerBlockSearch";
function search() {
    return (
    <S.CenterBlockSearch className="centerblock__search search">
              <S.SearchSvg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </S.SearchSvg>
              <S.centerBlockSearchInput
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </S.CenterBlockSearch>
    );
}

export default search;