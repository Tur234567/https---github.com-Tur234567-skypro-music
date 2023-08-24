import React from "react";
import { valueFunc } from "./cntrcontent.jsx";
import * as S from "./bar";

function cntrBar() {
  return (
    <S.BarDiv className="bar">
      <S.BarDivContent className="bar__content">
        <S.BarDivProgress className="bar__player-progress"></S.BarDivProgress>
        <S.BarDivPlayerBlock className="bar__player-block">
          <S.BarDivPlayer className="bar__player player">
            <S.BarPlayerControls className="player__controls">
              <S.BarPlayerBtnPrev className="player__btn-prev">
                <S.BarPlayerBtnPrevSvg className="player__btn-prev-svg" alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.BarPlayerBtnPrevSvg>
              </S.BarPlayerBtnPrev>
              <S.BarPlayerBtnPlay className="player__btn-play _btn">
                <S.BarPlayerBtnPlaySvg className="player__btn-play-svg" alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </S.BarPlayerBtnPlaySvg>
              </S.BarPlayerBtnPlay>
              <S.BarPlayerBtnNext className="player__btn-next">
                <S.BarPlayerBtnNextSvg className="player__btn-next-svg" alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.BarPlayerBtnNextSvg>
              </S.BarPlayerBtnNext>
              <S.BarPlayerBtnRepeat className="player__btn-repeat _btn-icon">
                <S.BarPlayerBtnRepeatSvg className="player__btn-repeat-svg" alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.BarPlayerBtnRepeatSvg>
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
                      "track-play__author-link"
                    }
                    href="http://"
                  >
                    Ты та...
                  </S.BarTrackPlayAuthorLink>
                </S.BarTrackPlayAuthor>
                <S.BarTrackPlayAlbum className="track-play__album">
                  <S.BarTrackPlayAlbumLink
                    className={
                      "track-play__author-link"
                    }
                    href="http://"
                  >
                    Баста
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
              <S.BarVolumeImg className="volume__image">
                <S.BarVolumeSvg className="volume__svg" alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.BarVolumeSvg>
              </S.BarVolumeImg>
              <S.BarVolumeProgress className="volume__progress _btn">
                <S.BarVolumeProgressLine
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
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
