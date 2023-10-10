import React, { useEffect, useState } from "react";
import * as S from "./cntrContent.js";
import { disLikedTrack, getTodos, likeTrack, likedTrack } from "../api.js";
import { IdSvgLogo, clickParams, getId } from "./bar.jsx";
import { IdSvg } from "./bar.jsx";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/creators/todo.js";
import { toggleStatusPlaylist } from "../pages/playlist/index.jsx";
export let valueFunc;
let info;
let error;

function timeGray() {
  const { useState, useEffect } = React;
  const [value, falseValue] = useState(true);
  valueFunc = value;
  const toggleValue = () => falseValue(!value);

  useEffect(() => {
    const timerId = setTimeout(toggleValue, 1000);
    if (value === false) {
      clearTimeout(timerId);
    }
  });
}

function CenterContent() {
  function infoClick(e) {
    info = e.id;
    getId(info);
    clickParams(false);
  }
  const [logo, setLogo] = useState(undefined);
  const [IdForSvg, setIdForSvg] = useState(null);
  const [todos, setTodos] = useState([]);
  const [isLikedTrack, setIsLikedTrack] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (toggleStatusPlaylist) {
        likeTrack().then((e) => {
          setTodos(e);
        });
      } else {
        getTodos().then((e) => {
          if (!(e[0].id === 8)) {
            error = e;
          } else {
            setTodos(e);
          }
        });
      }
    }, 500);
  }, []);

  function toggleTrack(params) {
    if (isLikedTrack === false) {
      setIsLikedTrack(true);
      likedTrack(params);
    }
    if (isLikedTrack === true) {
      setIsLikedTrack(false);
      disLikedTrack(params);
    }  
  }

  const dispatch = useDispatch();
  dispatch(addTodo(IdSvg));
  useEffect(() => {
    setInterval(() => {
      setIdForSvg(IdSvg.id);
      setLogo(IdSvgLogo);
    }, 500);
  });

  timeGray();
  return (
    <S.DivCenterBlockContent className="centerblock__content">
      {error ? (
        error
      ) : (
        <div>
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
                          {IdForSvg === todo.id ? (
                            <svg
                              width="16px"
                              height="16px"
                              background-color="#b672ff"
                              border-radius="8px"
                              display="block"
                              className={logo ? "playing-dot" : "noneClass"}
                            >
                              <path
                                d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
                                fill="#B672FF"
                              />
                            </svg>
                          ) : (
                            <S.DivTrackTitleSvg
                              className="track__title-svg"
                              alt="music"
                            >
                              <use
                                xlinkHref={
                                  "img/icon/sprite" +
                                  valueFunc +
                                  ".svg#icon-note"
                                }
                              ></use>
                            </S.DivTrackTitleSvg>
                          )}
                        </S.DivTrackTitleImg>
                        <S.DivTrackTitleText className="track__title-text">
                          <S.DivTrackTitleLink
                            className={"track__title-link link" + valueFunc}
                          >
                            {!valueFunc ? `${todo.name}` : ""}
                            <S.DivTrackTitleSpan
                              className={
                                "track__title-span span-text" + valueFunc
                              }
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
                      <S.DivTrackTime className="track__time" onClick={() => toggleTrack(todo)}>
                        <S.DivTrackTimeSvg
                          className="track__time-svg"
                          alt="time"
                        >
                            {isLikedTrack  ? <svg
      width="14"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.36529 12.751C14.2458 9.25098 17.3111 3.96019 13.9565 1.51832C11.7563 -0.0832586 9.29718 1.19273 8.36529 2.00669H8.34378H8.34372H8.32221C7.39032 1.19273 4.93121 -0.0832586 2.73102 1.51832C-0.623552 3.96019 2.44172 9.25098 8.32221 12.751H8.34372H8.34378H8.36529Z"
        fill="#B672FF"
      />
      <path
        d="M8.34372 2.00669H8.36529C9.29718 1.19273 11.7563 -0.0832586 13.9565 1.51832C17.3111 3.96019 14.2458 9.25098 8.36529 12.751H8.34372M8.34378 2.00669H8.32221C7.39032 1.19273 4.93121 -0.0832586 2.73102 1.51832C-0.623552 3.96019 2.44172 9.25098 8.32221 12.751H8.34378"
        stroke="#B672FF"
      />
    </svg> : <use xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}></use>}
                        </S.DivTrackTimeSvg>
                        <S.DivTrackTimeText
                          className={"track__time-text time-text" + valueFunc}
                        >
                          {!valueFunc
                            ? `${
                                "0" +
                                ((todo.duration_in_seconds / 60) % 60).toFixed(
                                  2
                                )
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
        </div>
      )}
    </S.DivCenterBlockContent>
  );
}

export default CenterContent;
