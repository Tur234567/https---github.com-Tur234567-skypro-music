import React from "react";
import { AppRoutes } from "./routes";
import { username } from "./pages/loginApi/AuthPage";

export const UserContext = React.createContext();

function App() {
    return (
      <UserContext.Provider value={username}>
      <AppRoutes/>
      </UserContext.Provider>
    )
}

export default App;
