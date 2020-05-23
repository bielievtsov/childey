import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Childey
      </NavLink>
      <div className={styles["header-right"]}>
        <NavLink to="logIn"> Log In </NavLink>
        <NavLink to="notifications"> Notifications </NavLink>
        <NavLink to="logout"> Log out </NavLink>
      </div>
    </div>
  );
};

export default Header;
