import React, { useEffect, useState } from "react";
import * as S from "./cntrContent.js";
import { getTodos } from "../api.js";
export let valueFunc;
export let info;

function infoClick(e) {
  console.log(e.id);
  info = e.id;
}

function timeGray() {
  const { useState, useEffect } = React;
  const [value, falseValue] = useState(true);
  valueFunc = value;
  const toggleValue = () => falseValue(!value);

  useEffect(() => {
    const timerId = setTimeout(toggleValue, 500);
    if (value === false) {
      clearTimeout(timerId);
    }
  });
}

function centerContent() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((todos) => {
      setTodos(todos);
    });
  }, []);

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
          {todos.map((todo) => {
            return (
              <S.DivPlaylistItem
                className="playlist__item"
                onClick={() => infoClick(todo)}
              >
                <S.DivPlaylistTrack
                  className={"playlist__track track visible" + valueFunc}
                >
                  <S.DivTrackTitle
                    className={"track__title visible" + valueFunc}
                  >
                    <S.DivTrackTitleImg className="track__title-image">
                      <S.DivTrackTitleSvg
                        className="track__title-svg"
                        alt="music"
                      >
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
                      >
                        {!valueFunc ? `${todo.name}` : ""}
                        <S.DivTrackTitleSpan
                          className={"track__title-span span-text" + valueFunc}
                        ></S.DivTrackTitleSpan>
                      </S.DivTrackTitleLink>
                    </S.DivTrackTitleText>
                  </S.DivTrackTitle>
                  <S.DivTrackAuthor className="track__author">
                    <S.DivTrackAuthorLink
                      className={"track__author-link author" + valueFunc}
                    >
                      {!valueFunc ? `${todo.author}` : ""}
                    </S.DivTrackAuthorLink>
                  </S.DivTrackAuthor>
                  <S.DivTrackAlbum className="track__album">
                    <S.DivTrackAlbumLink
                      className={"track__album-link album" + valueFunc}
                    >
                      {!valueFunc ? `${todo.album}` : ""}
                    </S.DivTrackAlbumLink>
                  </S.DivTrackAlbum>
                  <S.DivTrackTime className="track__time">
                    <S.DivTrackTimeSvg className="track__time-svg" alt="time">
                      <use
                        xlinkHref={
                          "img/icon/sprite" + valueFunc + ".svg#icon-like"
                        }
                      ></use>
                    </S.DivTrackTimeSvg>
                    <S.DivTrackTimeText
                      className={"track__time-text time-text" + valueFunc}
                    >
                      {!valueFunc
                        ? `${
                            "0" +
                            ((todo.duration_in_seconds / 60) % 60).toFixed(2)
                          }`
                        : ""}
                    </S.DivTrackTimeText>
                  </S.DivTrackTime>
                </S.DivPlaylistTrack>
              </S.DivPlaylistItem>
            );
          })}
        </S.DivContentPlaylist>
      </S.DivOverflowPlaylist>
    </S.DivCenterBlockContent>
  );
}

export default centerContent;
