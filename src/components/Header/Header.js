import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Header.module.css";

const Header = (props) => {
  const { isLoggedIn } = props;

  const handleLogOut = () => {
    localStorage.clear();
  };

  return (
    <div className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Childey
      </NavLink>
      <div className={styles["header-right"]}>
        <NavLink to="logIn" style={{ display: !isLoggedIn ? "block" : "none" }}>
          {" "}
          Log In{" "}
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
