import React from "react";
import { valueFunc } from "./cntrcontent.jsx";
import * as S from "./bar";
import { useRef, useState, useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";
import { getTodosId } from "../api.js";
let i;

export function nextTrack() {}

export let audioRef = "";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getId(e) {
  return (i = e);
}

export function clickParams() {}
  
function CntrBar() {
  const [isShow, setIsShow] = useState(false);
  const [Id, setId] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingLoop, setIsPlayingLoop] = useState(false);
  const [isPlayingRandom, setIsPlayingRandom] = useState(false);
  audioRef = useRef(null);

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  nextTrack = () => {
    if (isPlayingRandom === true) {
      toggle();
      setTimeout(() => {
        handleStart();
      }, 500);
    } 
    if (isPlayingRandom === false) {
      toggleNext();
      setTimeout(() => {
      handleStart();
    }, 500);
    } 
  }

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  clickParams = () => {
    if (audioRef.current) {
      handleStop();
      setTimeout(() => {
        setIsShow(false);
      }, 100);
    }
    setTimeout(() => {
      getTodosId(i).then((e) => {
        setId(e);
        setIsShow(true);
      })
    }, 200);
  }

  const toggleNext = () => {
    if (i > 35) {
      if (audioRef.current) {
        handleStop();
        setTimeout(() => {
          setIsShow(false);
        }, 100);
      }
      setTimeout(() => {
        getTodosId(36).then((e) => {
          setId(e);
          setIsShow(true);
        })
      }, 200);
    } else {
        handleStop();
        setTimeout(() => {
          setIsShow(false);
        }, 100);
      setTimeout(() => {
        i = Id.id + 1
        getTodosId(i).then((e) => {
            setId(e);
            setIsShow(true);
        })
      }, 200);
    }
  };

  const toggleBack = () => {
    if (i < 9) {
      if (audioRef.current) {
        handleStop();
        setTimeout(() => {
          setIsShow(false);
        }, 100);
      }
      setTimeout(() => {
        getTodosId(8).then((e) => {
          setId(e);
          setIsShow(true);
        })
      }, 200);
    } else {
      if (audioRef.current) {
        handleStop();
        setTimeout(() => {
          setIsShow(false);
        }, 100);
      }
      setTimeout(() => {
        getTodosId(i - 1).then((e) => {
          i = i - 1;
          setId(e);
          setIsShow(true);
        })
      }, 200);
    }
  };

  const toggle = () => {
    if (audioRef.current) {
      handleStop();
      setTimeout(() => {
        setIsShow(false);
      }, 100);
    }
    setTimeout(() => {
      getTodosId(getRandomIntInclusive(8,36)).then((e) => {
        setId(e);
        setIsShow(true);
      })
    }, 200);
  }

  const toggleShuffle = () => {
    if (isPlayingRandom === true) {
      setIsPlayingRandom(false);
      setTimeout(() => {
        nextTrack();
      }, 300);
    }
    if (isPlayingRandom === false) {
      setIsPlayingRandom(true);
      setTimeout(() => {
        nextTrack();
      }, 300);
    }
  }

  const togglePlay = isPlaying ? handleStop : handleStart;

  const handleLoop = () => {
    audioRef.current.loop = true;
    setIsPlayingLoop(true);
  };

  const handleLoopStop = () => {
    audioRef.current.loop = false;
    setIsPlayingLoop(false);
  };

  const toggleLoop = isPlayingLoop ? handleLoopStop : handleLoop;
  
  const [currentVolume, setCurrentVolume] = useState(0.1);

  useEffect(() => {
    if (!(audioRef.current === null)) {
      audioRef.current.volume = currentVolume;
    }
  })

  return (
    <S.BarDiv className="bar">
      {isShow && (
        <S.BarDivContent className="bar__content">
          <S.BarAudio controls ref={audioRef}>
            <source src={Id.track_file} type="audio/mpeg" />
          </S.BarAudio>
          <ProgressBar></ProgressBar>
          <S.BarDivPlayerBlock className="bar__player-block">
            <S.BarDivPlayer className="bar__player player">
              <S.BarPlayerControls className="player__controls">
                <S.BarPlayerBtnPrev
                  className="player__btn-prev"
                  onClick={toggleBack}
                >
                  <S.BarPlayerBtnPrevSvg
                    className="player__btn-prev-svg"
                    alt="prev"
                  >
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </S.BarPlayerBtnPrevSvg>
                </S.BarPlayerBtnPrev>
                <S.BarPlayerBtnPlay
                  className="player__btn-play _btn"
                  onClick={togglePlay}
                >
                  <S.BarPlayerBtnPlaySvg
                    className="player__btn-play-svg"
                    alt="play"
                  >
                    {isPlaying ? (
                      <svg
                        width="15"
                        height="19"
                        viewBox="0 0 15 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="5" height="19" fill="#D9D9D9" />
                        <rect x="10" width="5" height="19" fill="#D9D9D9" />
                      </svg>
                    ) : (
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    )}
                  </S.BarPlayerBtnPlaySvg>
                </S.BarPlayerBtnPlay>
                <S.BarPlayerBtnNext
                  className="player__btn-next"
                  onClick={toggleNext}
                >
                  <S.BarPlayerBtnNextSvg
                    className="player__btn-next-svg"
                    alt="next"
                  >
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.BarPlayerBtnNextSvg>
                </S.BarPlayerBtnNext>
                <S.BarPlayerBtnRepeat
                  className="player__btn-repeat _btn-icon"
                  onClick={toggleLoop}
                >
                  {isPlayingLoop ? (
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0005 3.70312L5.00049 0.816374V6.58988L10.0005 3.70312ZM7.00049 15.2031C3.96292 15.2031 1.50049 12.7407 1.50049 9.70312H0.500488C0.500488 13.293 3.41064 16.2031 7.00049 16.2031V15.2031ZM1.50049 9.70312C1.50049 6.66556 3.96292 4.20312 7.00049 4.20312V3.20312C3.41064 3.20312 0.500488 6.11327 0.500488 9.70312H1.50049Z"
                        fill="white"
                      />
                      <path
                        d="M10.0005 15.7031L15.0005 18.5899V12.8164L10.0005 15.7031ZM13.0005 4.20312C16.0381 4.20312 18.5005 6.66556 18.5005 9.70312H19.5005C19.5005 6.11327 16.5903 3.20312 13.0005 3.20312V4.20312ZM18.5005 9.70312C18.5005 12.7407 16.0381 15.2031 13.0005 15.2031V16.2031C16.5903 16.2031 19.5005 13.293 19.5005 9.70312H18.5005Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <S.BarPlayerBtnRepeatSvg
                      className="player__btn-repeat-svg"
                      alt="repeat"
                    >
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.BarPlayerBtnRepeatSvg>
                  )}
                </S.BarPlayerBtnRepeat>
                <S.BarPlayerBtnShuffle
                  className="player__btn-shuffle _btn-icon"
                  onClick={toggleShuffle}
                >
                  {isPlayingRandom ? (<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0005 15.7031L14.0005 12.8164V18.5899L19.0005 15.7031ZM9.66366 12.7864L9.20912 12.9947L9.66366 12.7864ZM6.83732 6.61985L6.38279 6.82818L6.83732 6.61985ZM0.000488281 4.20312H2.292V3.20312H0.000488281V4.20312ZM6.38279 6.82818L9.20912 12.9947L10.1182 12.5781L7.29185 6.41152L6.38279 6.82818ZM14.209 16.2031H14.5005V15.2031H14.209V16.2031ZM9.20912 12.9947C10.1052 14.9497 12.0584 16.2031 14.209 16.2031V15.2031C12.4494 15.2031 10.8513 14.1776 10.1182 12.5781L9.20912 12.9947ZM2.292 4.20312C4.05153 4.20312 5.64967 5.22864 6.38279 6.82818L7.29185 6.41152C6.39582 4.45654 4.44254 3.20312 2.292 3.20312V4.20312Z" fill="white"/>
<path d="M19.0005 3.70312L14.0005 6.58988V0.816374L19.0005 3.70312ZM9.66366 6.61985L9.20912 6.41152L9.66366 6.61985ZM6.83732 12.7864L6.38279 12.5781L6.83732 12.7864ZM0.000488281 15.2031H2.292V16.2031H0.000488281V15.2031ZM6.38279 12.5781L9.20912 6.41152L10.1182 6.82818L7.29185 12.9947L6.38279 12.5781ZM14.209 3.20312H14.5005V4.20312H14.209V3.20312ZM9.20912 6.41152C10.1052 4.45654 12.0584 3.20312 14.209 3.20312V4.20312C12.4494 4.20312 10.8513 5.22864 10.1182 6.82818L9.20912 6.41152ZM2.292 15.2031C4.05153 15.2031 5.64967 14.1776 6.38279 12.5781L7.29185 12.9947C6.39582 14.9497 4.44254 16.2031 2.292 16.2031V15.2031Z" fill="white"/>
</svg>
) : (
                    <S.BarPlayerBtnShuffleSvg
                    className="player__btn-shuffle-svg"
                    alt="shuffle"
                  >
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </S.BarPlayerBtnShuffleSvg>
                  )}
                </S.BarPlayerBtnShuffle>
              </S.BarPlayerControls>
              <S.BarPlayerTrackPlay className="player__track-play track-play">
                <S.BarPlayerTrackPlayContain
                  className={"track-play__contain contain-" + valueFunc}
                >
                  <S.BarTrackPlayImg className="track-play__image">
                    <S.BarTrackPlaySvg className="track-play__svg" alt="music">
                      <use
                        xlinkHref={
                          "img/icon/sprite" + valueFunc + ".svg#icon-note"
                        }
                      ></use>
                    </S.BarTrackPlaySvg>
                  </S.BarTrackPlayImg>
                  <S.BarTrackPlayAuthor className="track-play__author">
                    <S.BarTrackPlayAuthorLink
                      className={
                        "track-play__author-link footer-link-" + valueFunc
                      }
                      href="http://"
                    >
                      {!valueFunc ? `${Id.name}` : ""}
                    </S.BarTrackPlayAuthorLink>
                  </S.BarTrackPlayAuthor>
                  <S.BarTrackPlayAlbum className="track-play__album">
                    <S.BarTrackPlayAlbumLink
                      className={
                        "track-play__author-link footer-link-" + valueFunc
                      }
                      href="http://"
                    >
                      {!valueFunc ? `${Id.author}` : ""}
                    </S.BarTrackPlayAlbumLink>
                  </S.BarTrackPlayAlbum>
                </S.BarPlayerTrackPlayContain>
                <S.BarPlayerTrackPlayLikeDis className="track-play__like-dis">
                  <S.BarTrackPlayLike
                    className="track-play__like _btn-icon"
                    onClick={toggle}
                  >
                    <S.BarTrackPlayLikeSvg
                      className="track-play__like-svg"
                      alt="like"
                    >
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.BarTrackPlayLikeSvg>
                  </S.BarTrackPlayLike>
                  <S.BarTrackPlayDislike
                    className="track-play__dislike _btn-icon"
                    onClick={toggle}
                  >
                    <S.BarTrackPlayDislikeSvg
                      className="track-play__dislike-svg"
                      alt="dislike"
                    >
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.BarTrackPlayDislikeSvg>
                  </S.BarTrackPlayDislike>
                </S.BarPlayerTrackPlayLikeDis>
              </S.BarPlayerTrackPlay>
            </S.BarDivPlayer>
            <S.BarVolumeBlock className="bar__volume-block volume">
              <S.BarVolumeContent className="volume__content">
                <div></div>
                <S.BarVolumeImg className="volume__image">
                  <S.BarVolumeSvg className="volume__svg" alt="volume">
                    <use xlinkHref={"img/icon/sprite.svg#icon-volume"}></use>
                  </S.BarVolumeSvg>
                </S.BarVolumeImg>
                <S.BarVolumeProgress className="volume__progress _btn">
                  <S.BarVolumeProgressLine
                    className="volume__progress-line _btn"
                    type="range"
                    min={0}
                    max={1}
                    value={currentVolume}
                    step={0.01}
                    onChange={(event) => setCurrentVolume(event.target.value)}
                    $color="#ff0000"
                  />
                </S.BarVolumeProgress>
              </S.BarVolumeContent>
            </S.BarVolumeBlock>
          </S.BarDivPlayerBlock>
        </S.BarDivContent>
      )}
    </S.BarDiv>
  );
}

export default CntrBar;

