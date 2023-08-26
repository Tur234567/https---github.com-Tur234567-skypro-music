import "./cntrContent.css";
import React from "react";
import * as S from "./cntrContent.js";
export let valueFunc;

function timeGray() {
  const { useState, useEffect } = React;
  const [value, falseValue] = useState(true);
  valueFunc = value;
  const toggleValue = () => falseValue(!value);

  useEffect(() => {
    const timerId = setTimeout(toggleValue, 5000);
    if (value === false) {
      clearTimeout(timerId);
    }
  });
}
function centerContent() {
  timeGray();
  return (
    <S.DivCenterBlockContent className="centerblock__content">
      <S.DivContentTitle className="content__title playlist-title">
        <S.DivPlaylistTitleCol className="playlist-title__col col01">
          Трек
        </S.DivPlaylistTitleCol>
        <S.DivPlaylistTitleCol className="playlist-title__col col02">
          ИСПОЛНИТЕЛЬ
        </S.DivPlaylistTitleCol>
        <S.DivPlaylistTitleCol className="playlist-title__col col03">
          АЛЬБОМ
        </S.DivPlaylistTitleCol>
        <S.DivPlaylistTitleCol className="playlist-title__col col04">
          <S.DivPlaylistTitleSvg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </S.DivPlaylistTitleSvg>
        </S.DivPlaylistTitleCol>
      </S.DivContentTitle>
      <S.DivOverflowPlaylist className="overflow-playlist">
        <S.DivContentPlaylist className="content__playlist playlist">
          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>

          <S.DivPlaylistItem className="playlist__item">
            <S.DivPlaylistTrack
              className={"playlist__track track visible" + valueFunc}
            >
              <S.DivTrackTitle className={"track__title visible" + valueFunc}>
                <S.DivTrackTitleImg className="track__title-image">
                  <S.DivTrackTitleSvg className="track__title-svg" alt="music">
                    <use
                      xlinkHref={
                        "img/icon/sprite" + valueFunc + ".svg#icon-note"
                      }
                    ></use>
                  </S.DivTrackTitleSvg>
                </S.DivTrackTitleImg>
                <S.DivTrackTitleText className="track__title-text">
                  <S.DivTrackTitleLink
                    className={"track__title-link link" + valueFunc}
                    href="http://"
                  >
                    {!valueFunc ? "Guilt" : ""}
                    <S.DivTrackTitleSpan
                      className={"track__title-span span-text" + valueFunc}
                    ></S.DivTrackTitleSpan>
                  </S.DivTrackTitleLink>
                </S.DivTrackTitleText>
              </S.DivTrackTitle>
              <S.DivTrackAuthor className="track__author">
                <S.DivTrackAuthorLink
                  className={"track__author-link author" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Nero" : ""}
                </S.DivTrackAuthorLink>
              </S.DivTrackAuthor>
              <S.DivTrackAlbum className="track__album">
                <S.DivTrackAlbumLink
                  className={"track__album-link album" + valueFunc}
                  href="http://"
                >
                  {!valueFunc ? "Welcome Reality" : ""}
                </S.DivTrackAlbumLink>
              </S.DivTrackAlbum>
              <S.DivTrackTime className="track__time">
                <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                  ></use>
                </S.DivTrackTimeSvg>
                <S.DivTrackTimeText
                  className={"track__time-text time-text" + valueFunc}
                >
                  {!valueFunc ? "4:44" : ""}
                </S.DivTrackTimeText>
              </S.DivTrackTime>
            </S.DivPlaylistTrack>
          </S.DivPlaylistItem>
        </S.DivContentPlaylist>
      </S.DivOverflowPlaylist>
    </S.DivCenterBlockContent>
  );
}

export default centerContent;
