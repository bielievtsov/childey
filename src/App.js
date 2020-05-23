import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import LogIn from "./components/LogIn/LogIn";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div>
      <Header></Header>
      <Route path="/" exact>
        <HomePage></HomePage>
      </Route>
      <Route path="/logIn" exact>
        <LogIn></LogIn>
      </Route>
      <Route path="/main" exact>
        <ProfilePage></ProfilePage>
      </Route>
    </div>
  );
}

export default App;
