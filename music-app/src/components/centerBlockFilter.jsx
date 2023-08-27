import React from "react";
import * as S from "./centerBlockFilter.js"

const { useState } = React;

function filter() {
  const [visible, setVisible] = useState(false);
  const [visibleGenre, setVisibleGenre] = useState(false);
  const [visibleYear, setVisibleYear] = useState(false);

  function toggleVisible() {
      setVisible(!visible);
      setVisibleGenre(null)
      setVisibleYear(null)
  }

  function toggleVisibleYear() {
    setVisibleYear(!visibleYear)
    setVisibleGenre(null)
    setVisible(null);
  }

  function toggleVisibleGenre() {
    setVisibleGenre(!visibleGenre)
    setVisible(null);
    setVisibleYear(null)
  }

    return (
      <S.DivParent className="parent">
        <S.DivCenterBlockFilter className="centerblock__filter filter">
              <S.DivFilterTitle className="filter__title">Искать по:</S.DivFilterTitle>
              <S.DivFilterButton className="filter__button button-author _btn-text" onClick={toggleVisible}>
                исполнителю
              </S.DivFilterButton>
              <S.DivFilterButton className="filter__button button-year _btn-text" onClick={toggleVisibleYear}>
                году выпуска
              </S.DivFilterButton>
              <S.DivFilterButton className="filter__button button-genre _btn-text" onClick={toggleVisibleGenre}>
              жанру</S.DivFilterButton>
            </S.DivCenterBlockFilter>
            {visible && (
      <S.DivAuthor className="author">
      <S.DivAuthorContent className="author_content author_content-author">
      <span>Nero</span>
    <span>Dynoro, Outwork, Mr. Gee</span>
    <span>Ali Bakgor</span>
    <span>Стоункат, Psychopath</span>
    <span>Jaded, Will Clarke, AR/CO</span>
    <span>Blue Foundation, Zeds Dead</span>
    <span>HYBIT, Mr. Black, Offer Nissim, Hi Profile</span>
    <span>minthaze</span>
    <span>Calvin Harris, Disciples</span>
    <span>Tom Boxer</span>
      </S.DivAuthorContent>
  </S.DivAuthor>
  )}
  {visibleYear && (
  <S.DivAuthor className="author author-year">
    <S.DivAuthorContent className="author_content author_content-year">
    <span>По умолчанию</span>
    <span>Сначала новые</span>
    <span>Сначала старые</span>
    </S.DivAuthorContent>
  </S.DivAuthor>
  )}
  {visibleGenre && (
  <S.DivAuthor className="author author-genre">
    <S.DivAuthorContent className="author_content author_content-genre">
    <span>Рок</span>
    <span>Хип-хоп</span>
    <span>Поп-музыка</span>
    <span>Техно</span>
    <span>Инди</span>
    </S.DivAuthorContent>
  </S.DivAuthor>
  )}
      </S.DivParent>
    );
}
export default filter;