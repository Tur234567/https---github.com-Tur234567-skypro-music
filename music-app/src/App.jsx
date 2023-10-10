import React from "react";
import { AppRoutes } from "./routes";
import { username } from "./pages/loginApi/AuthPage";
import CntrBar from "./components/bar.jsx";

export const UserContext = React.createContext();
export let setTodosPlaylist;

function App() {
    return (
      <div>
      <CntrBar/>
      <UserContext.Provider value={username}>
      <AppRoutes/>
      </UserContext.Provider>
      </div>
    )
}

export default App;
