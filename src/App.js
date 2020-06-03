import React from "react";
import { Route, Router } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import LogIn from "./components/LogIn/LogIn";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PatientsPage from "./pages/PatientsPage/PatientsPage";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import PregnantPage from "./pages/PregnantPage/PregnantPage";
import CreateAppointment from "./pages/CreateAppointment/CreateAppointment";
import QR from "./components/QR/QR";

function App() {
  return (
    <div>
      <QR></QR>
      <Header></Header>
      <Route path="/main" exact>
        <CalendarPage></CalendarPage>
      </Route>
      <Route path="/" exact>
        <HomePage></HomePage>
      </Route>
      <Route path="/logIn" exact>
        <LogIn></LogIn>
      </Route>
      <Route path="/profile" exact>
        <ProfilePage></ProfilePage>
      </Route>
      <Route path="/patientspage" exact>
        <PatientsPage></PatientsPage>
      </Route>
      <Route path="/notifications" exact>
        <NotificationsPage></NotificationsPage>
      </Route>
      <Route path="/pregnantpage" exact>
        <PregnantPage></PregnantPage>
      </Route>
      <Route path="/create-appointment" exact>
        <CreateAppointment></CreateAppointment>
      </Route>
    </div>
  );
}

export default App;
