import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Header.module.css";

const Header = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("token")) ? true : false
  );
  const [doctorName, setDoctorName] = useState("");

  const idLn = props.isLoggedIn;

  if (isLoggedIn) {
    const { doctorId } = JSON.parse(localStorage.getItem("token"));
    const { token } = JSON.parse(localStorage.getItem("token"));
    fetch("http://140.82.32.65:3000/doctor/" + doctorId, {
      headers: { "x-access-token": token },
    })
      .then((response) => response.json())
      .then((data) => {
        setDoctorName(data.firstName);
        return data;
      });
  }

  const handleLogOut = () => {
    localStorage.clear();
    setIsLoggedIn(JSON.parse(localStorage.getItem("token")) ? true : false);
  };

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("token")) ? true : false);
  }, [idLn]);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">Hello, {!isLoggedIn ? "Childey" : doctorName}!</NavLink>
      </div>
      <div className={styles["header-right"]}>
        <NavLink to="logIn" style={{ display: !isLoggedIn ? "block" : "none" }}>
          {" "}
          Log In{" "}
        </NavLink>
        <NavLink to="main" style={{ display: isLoggedIn ? "block" : "none" }}>
          {" "}
          Calendar{" "}
        </NavLink>
        <NavLink
          to="profile"
          style={{ display: isLoggedIn ? "block" : "none" }}
        >
          {" "}
          Profile{" "}
        </NavLink>
        <NavLink
          to="notifications"
          style={{ display: isLoggedIn ? "block" : "none" }}
        >
          {" "}
          Notifications{" "}
        </NavLink>
        <NavLink
          to="patientspage"
          style={{ display: isLoggedIn ? "block" : "none" }}
        >
          {" "}
          Patients{" "}
        </NavLink>
        <NavLink
          to="/"
          style={{ display: isLoggedIn ? "block" : "none" }}
          onClick={handleLogOut}
        >
          {" "}
          Log out{" "}
        </NavLink>
      </div>
    </div>
  );
};

const dispatchPropsToState = (dispatch) => {
  return {
    LogIn: () => {
      dispatch({ type: "LOG_IN" });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, dispatchPropsToState)(Header);
