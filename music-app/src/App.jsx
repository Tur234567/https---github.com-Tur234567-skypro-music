import "./App.css";
import React from "react";
import mainNav from "./components/musicBlock";
import search from "./components/centerBlockSearch";
import filter from "./components/centerBlockFilter";
import centerContent from "./components/cntrcontent";
import cntrBar from "./components/bar";
import sidebar from "./components/sideBar";
import footer from "./components/footer";
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
          {sidebar()}
        </main>
        {cntrBar()}
        {footer()}
      </div>
    </div>
  );
}

export default App;
