import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./LogIn.module.scss";

const LogIn = (props) => {
  const [phoneNumber, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirectAbort, setIsRedirectAbort] = useState(false);

  const handleFormChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  useEffect(() => {
    if (!props.showLogIn) {
      props.LogIn();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://140.82.32.65:3000/doctor/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber,
        password,
      }),
    });
    if (response.status === 200) {
      const responseJSON = await response.json();

      localStorage.setItem("token", JSON.stringify(responseJSON));
      props.LogIn();
      setIsRedirect(!isRedirect);
    } else {
      alert("Неправильні дані входу, спробуйте ще :-)");
    }
  };

  if (isRedirectAbort) {
    return <Redirect to={{ pathname: "/" }}></Redirect>;
  } else if (isRedirect) {
    return <Redirect to={{ pathname: "/main" }}></Redirect>;
  } else {
    return (
      <div className={styles["wrapper"]}>
        <form
          onChange={handleFormChange}
          className={styles["login"]}
          autoComplete="off"
          role="main"
        >
          <h1 className={styles["title"]}>Вітаємо, авторизуйтесь!</h1>
          <input
            type="text"
            name="email"
            placeholder="Телефон"
            required
            autoFocus
          />
          <i className={styles["fa fa-user"]}></i>
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />
          <i className={styles["fa fa-user"]}></i>
          <button onClick={handleSubmit}>
            {" "}
            <i className={styles["spinner"]}></i>
            <span className={styles["state"]}>Увійти</span>
          </button>
        </form>
      </div>
    );
  }
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
    showLogIn: state.showLogIn,
  };
};

export default connect(mapStateToProps, dispatchPropsToState)(LogIn);
