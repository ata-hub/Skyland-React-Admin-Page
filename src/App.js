import "./style/dark.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Ranking from "./components/ranking/Ranking";
import Tasks from "./pages/tasks/Tasks";

function App() {
  

  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New/>} />
              <Route path="ranking" element={<Ranking/>} />
            </Route>
            <Route path="tasks">
              <Route index element={<Tasks/>}/>
              <Route path=":taskId" element={<Single/>} />
              <Route path="new" element={<New/>} />
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
