import React from "react";
import { valueFunc } from "./cntrcontent.jsx";
import * as S from "./bar";
import { useRef, useState } from "react";

function cntrBar() {
  const { useEffect } = React;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingLoop, setIsPlayingLoop] = useState(false);
  const audioRef = useRef(null);
  
  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  const handleLoop = () => {
    audioRef.current.loop = true;
    setIsPlayingLoop(true);
  }

  const handleLoopStop = () => {
    audioRef.current.loop = false;
    setIsPlayingLoop(false);
  }

  const toggleLoop = isPlayingLoop ? handleLoopStop : handleLoop;

  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    audioRef.current.currentTime = currentTime;
    setDuration(audioRef.current.duration);
    audioRef.current.volume = currentVolume;
  })

 function ProgressBar() {
    return (
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(event) => setCurrentTime(event.target.value)}
        $color="#ff0000"
      />
    );
  }

  return (
    <S.BarDiv className="bar">
      <S.BarAudio controls ref={audioRef}>
        <source src="/music/Katy Perry - I Kissed A Girl.mp3" type="audio/mpeg" />
      </S.BarAudio>
      <S.BarDivContent className="bar__content">  
      <ProgressBar></ProgressBar>
        <S.BarDivPlayerBlock className="bar__player-block">
          <S.BarDivPlayer className="bar__player player">
            <S.BarPlayerControls className="player__controls">
              <S.BarPlayerBtnPrev className="player__btn-prev">
                <S.BarPlayerBtnPrevSvg className="player__btn-prev-svg" alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.BarPlayerBtnPrevSvg>
              </S.BarPlayerBtnPrev>
              <S.BarPlayerBtnPlay className="player__btn-play _btn" onClick={togglePlay}>
                <S.BarPlayerBtnPlaySvg className="player__btn-play-svg" alt="play">
                {isPlaying ? <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="5" height="19" fill="#D9D9D9"/>
<rect x="10" width="5" height="19" fill="#D9D9D9"/>
</svg>
 : <use xlinkHref= "img/icon/sprite.svg#icon-play"></use>}
                </S.BarPlayerBtnPlaySvg>
              </S.BarPlayerBtnPlay>
              <S.BarPlayerBtnNext className="player__btn-next">
                <S.BarPlayerBtnNextSvg className="player__btn-next-svg" alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.BarPlayerBtnNextSvg>
              </S.BarPlayerBtnNext>
              <S.BarPlayerBtnRepeat className="player__btn-repeat _btn-icon" onClick={toggleLoop}>
                {isPlayingLoop ? <svg width="18" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0005 3.70312L5.00049 0.816374V6.58988L10.0005 3.70312ZM7.00049 15.2031C3.96292 15.2031 1.50049 12.7407 1.50049 9.70312H0.500488C0.500488 13.293 3.41064 16.2031 7.00049 16.2031V15.2031ZM1.50049 9.70312C1.50049 6.66556 3.96292 4.20312 7.00049 4.20312V3.20312C3.41064 3.20312 0.500488 6.11327 0.500488 9.70312H1.50049Z" fill="white"/>
<path d="M10.0005 15.7031L15.0005 18.5899V12.8164L10.0005 15.7031ZM13.0005 4.20312C16.0381 4.20312 18.5005 6.66556 18.5005 9.70312H19.5005C19.5005 6.11327 16.5903 3.20312 13.0005 3.20312V4.20312ZM18.5005 9.70312C18.5005 12.7407 16.0381 15.2031 13.0005 15.2031V16.2031C16.5903 16.2031 19.5005 13.293 19.5005 9.70312H18.5005Z" fill="white"/>
</svg>

 : <S.BarPlayerBtnRepeatSvg className="player__btn-repeat-svg" alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.BarPlayerBtnRepeatSvg>}
              </S.BarPlayerBtnRepeat>
              <S.BarPlayerBtnShuffle className="player__btn-shuffle _btn-icon">
                <S.BarPlayerBtnShuffleSvg className="player__btn-shuffle-svg" alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.BarPlayerBtnShuffleSvg>
              </S.BarPlayerBtnShuffle>
            </S.BarPlayerControls>
            <S.BarPlayerTrackPlay className="player__track-play track-play">
              <S.BarPlayerTrackPlayContain className={"track-play__contain contain-" + valueFunc}>
                <S.BarTrackPlayImg className="track-play__image">
                  <S.BarTrackPlaySvg className="track-play__svg" alt="music">
                    <use
                      xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
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
                    {!valueFunc ? "Ты та..." : ""}
                  </S.BarTrackPlayAuthorLink>
                </S.BarTrackPlayAuthor>
                <S.BarTrackPlayAlbum className="track-play__album">
                  <S.BarTrackPlayAlbumLink
                    className={
                      "track-play__author-link footer-link-" + valueFunc
                    }
                    href="http://"
                  >
                    {!valueFunc ? "Баста" : ""}
                  </S.BarTrackPlayAlbumLink>
                </S.BarTrackPlayAlbum>
              </S.BarPlayerTrackPlayContain>
              <S.BarPlayerTrackPlayLikeDis className="track-play__like-dis">
                <S.BarTrackPlayLike className="track-play__like _btn-icon">
                  <S.BarTrackPlayLikeSvg className="track-play__like-svg" alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.BarTrackPlayLikeSvg>
                </S.BarTrackPlayLike>
                <S.BarTrackPlayDislike className="track-play__dislike _btn-icon">
                  <S.BarTrackPlayDislikeSvg className="track-play__dislike-svg" alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.BarTrackPlayDislikeSvg>
                </S.BarTrackPlayDislike>
              </S.BarPlayerTrackPlayLikeDis>
            </S.BarPlayerTrackPlay>
          </S.BarDivPlayer>
          <S.BarVolumeBlock className="bar__volume-block volume">
            <S.BarVolumeContent className="volume__content">
              <div>
              </div>
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
    </S.BarDiv>
  );
}
export default cntrBar;
