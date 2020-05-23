import React from "react";
import { Route, Router } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import LogIn from "./components/LogIn/LogIn";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PatientsPage from "./pages/PatientsPage/PatientsPage";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage";

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
      <Route path="/patientspage" exact>
        <PatientsPage></PatientsPage>
      </Route>
      <Route path="/notifications" exact>
        <NotificationsPage></NotificationsPage>
      </Route>
    </div>
  );
}

export default App;
