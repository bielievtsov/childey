import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Header.module.css";

const Header = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("token")) ? true : false
  );
  const [doctorName, setDoctorName] = useState("");
  const { doctorId } = JSON.parse(localStorage.getItem("token")) || "";
  const { token } = JSON.parse(localStorage.getItem("token")) || "";

  useEffect(() => {
    fetch(`http://140.82.32.65:3000/params/${doctorId}`, {
      headers: { "x-access-token": token },
    })
      .then((res) => res.json())
      .then((data) => {
        props.Notif(data);
      });
  }, [isLoggedIn]);

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
        <NavLink to="/">
          Вітаємо, {!isLoggedIn ? "Childey" : doctorName}!
        </NavLink>
      </div>
      <div className={styles["header-right"]}>
        <NavLink to="logIn" style={{ display: !isLoggedIn ? "block" : "none" }}>
          {" "}
          Увійти{" "}
        </NavLink>
        <NavLink
          to="profile"
          style={{ display: isLoggedIn ? "block" : "none" }}
        >
          {" "}
          Профіль{" "}
        </NavLink>
        <NavLink to="main" style={{ display: isLoggedIn ? "block" : "none" }}>
          {" "}
          Календар{" "}
        </NavLink>
        <NavLink
          to="patientspage"
          style={{ display: isLoggedIn ? "block" : "none" }}
        >
          {" "}
          Пацієнти{" "}
        </NavLink>
        <NavLink
          to="notifications"
          style={{
            display: isLoggedIn ? "block" : "none",
            color: props.noficications ? "rgb(255, 77, 77)" : "black",
          }}
        >
          {" "}
          Повідомлення{" "}
        </NavLink>
        <NavLink
          to="/"
          style={{ display: isLoggedIn ? "block" : "none" }}
          onClick={handleLogOut}
        >
          {" "}
          Вийти{" "}
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
    Notif: (payload) => {
      dispatch({ type: "NOTIF", payload });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    noficications: state.noficications,
  };
};

export default connect(mapStateToProps, dispatchPropsToState)(Header);
