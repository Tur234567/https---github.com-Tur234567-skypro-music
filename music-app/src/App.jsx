import "./App.css";
import React from "react";
import mainNav from "./components/musicBlock";
import search from "./components/centerBlockSearch";
import filter from "./components/centerBlockFilter";
import centerContent from "./components/cntrcontent";
import cntrBar from "./components/bar";
function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
        {mainNav()}
          <div className="main__centerblock centerblock">
            {search()}
            <h2 className="centerblock__h2">Треки</h2>
            {filter()}
            {centerContent()}
          </div>
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
                      src="img/playlist01.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist03.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        {cntrBar()}
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
