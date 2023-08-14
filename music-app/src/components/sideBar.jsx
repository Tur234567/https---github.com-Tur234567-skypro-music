import React from "react";
import "./sideBar.css";
import playlist1 from "./img/playlist01.png"
import playlist2 from "./img/playlist02.png"
import playlist3 from "./img/playlist03.png"
function sidebar() {
    return (
        <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">Sergey.Ivanov</p>
          <div className="sidebar__icon">
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
          </div>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src={playlist1}
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src={playlist2}
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src={playlist3}
                  alt="day's playlist"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default sidebar;