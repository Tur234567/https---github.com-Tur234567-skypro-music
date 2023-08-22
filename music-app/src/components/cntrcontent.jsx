import "./cntrContent.css";
import React from "react";
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
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <div className="content__playlist playlist overflow-playlist">
        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Guilt{" "}
                  <span
                    className={"track__title-span span-text" + valueFunc}
                  ></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                Nero
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Welcome Reality
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                4:44
              </span>
            </div>
          </div>
        </div>

        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Elektro{" "}
                  <span
                    className={"track__title-span span-text" + valueFunc}
                  ></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                Dynoro, Outwork, Mr. Gee
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Elektro
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                2:22
              </span>
            </div>
          </div>
        </div>

        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  I’m Fire{" "}
                  <span
                    className={"track__title-span span-text" + valueFunc}
                  ></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                Ali Bakgor
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                I’m Fire
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                2:22
              </span>
            </div>
          </div>
        </div>

        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Non Stop
                  <span className={"track__title-span span-text" + valueFunc}>
                    (Remix)
                  </span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                Стоункат, Psychopath
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Non Stop
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                4:12
              </span>
            </div>
          </div>
        </div>

        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Run Run
                  <span className={"track__title-span span-text" + valueFunc}>
                    (feat. AR/CO)
                  </span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                Jaded, Will Clarke, AR/CO
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Run Run
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                2:54
              </span>
            </div>
          </div>
        </div>

        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Eyes on Fire
                  <span className={"track__title-span span-text" + valueFunc}>
                    (Zeds Dead Remix)
                  </span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                Blue Foundation, Zeds Dead
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Eyes on Fire
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                5:20
              </span>
            </div>
          </div>
        </div>

        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Mucho Bien
                  <span className={"track__title-span span-text" + valueFunc}>
                    (Hi Profile Remix)
                  </span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                HYBIT, Mr. Black, Offer Nissim, Hi Profile
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Mucho Bien
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                3:41
              </span>
            </div>
          </div>
        </div>

        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Knives n Cherries
                  <span
                    className={"track__title-span span-text" + valueFunc}
                  ></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                minthaze
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Captivating
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                1:48
              </span>
            </div>
          </div>
        </div>

        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Knives n Cherries
                  <span
                    className={"track__title-span span-text" + valueFunc}
                  ></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                minthaze
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Captivating
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                1:48
              </span>
            </div>
          </div>
        </div>
        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Knives n Cherries
                  <span
                    className={"track__title-span span-text" + valueFunc}
                  ></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                minthaze
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Captivating
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                1:48
              </span>
            </div>
          </div>
        </div>
        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Knives n Cherries
                  <span
                    className={"track__title-span span-text" + valueFunc}
                  ></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                minthaze
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Captivating
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                1:48
              </span>
            </div>
          </div>
        </div>
        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Knives n Cherries
                  <span
                    className={"track__title-span span-text" + valueFunc}
                  ></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                minthaze
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Captivating
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                1:48
              </span>
            </div>
          </div>
        </div>
        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Knives n Cherries
                  <span
                    className={"track__title-span span-text" + valueFunc}
                  ></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                minthaze
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Captivating
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                1:48
              </span>
            </div>
          </div>
        </div>
        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Knives n Cherries
                  <span
                    className={"track__title-span span-text" + valueFunc}
                  ></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                minthaze
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Captivating
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                1:48
              </span>
            </div>
          </div>
        </div>

        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  How Deep Is Your Love
                  <span
                    className={"track__title-span span-text" + valueFunc}
                  ></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                Calvin Harris, Disciples
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                How Deep Is Your Love
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                3:32
              </span>
            </div>
          </div>
        </div>

        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  Morena{" "}
                  <span
                    className={"track__title-span span-text" + valueFunc}
                  ></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              >
                Tom Boxer
              </a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              >
                Soundz Made in Romania
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}>
                3:36
              </span>
            </div>
          </div>
        </div>

        <div className="playlist__item">
          <div className={"playlist__track track visible" + valueFunc}>
            <div className={"track__title visible" + valueFunc}>
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use
                    xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-note"}
                  ></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a
                  className={"track__title-link link" + valueFunc}
                  href="http://"
                >
                  <span
                    className={"track__title-span span-text" + valueFunc}
                  ></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a
                className={"track__author-link author" + valueFunc}
                href="http://"
              ></a>
            </div>
            <div className="track__album">
              <a
                className={"track__album-link album" + valueFunc}
                href="http://"
              ></a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use
                  xlinkHref={"img/icon/sprite" + valueFunc + ".svg#icon-like"}
                ></use>
              </svg>
              <span className={"track__time-text time-text" + valueFunc}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default centerContent;
