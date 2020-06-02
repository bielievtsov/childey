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

  const handleAbortLogIn = (e) => {
    e.preventDefault();
    setPassword("");
    setEmail("");
    setIsRedirectAbort(!isRedirectAbort);
  };

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

    const responseJSON = await response.json();

    localStorage.setItem("token", JSON.stringify(responseJSON));
    props.LogIn();
    setIsRedirect(!isRedirect);
  };

  if (isRedirectAbort) {
    return <Redirect to={{ pathname: "/" }}></Redirect>;
  } else if (isRedirect) {
    return <Redirect to={{ pathname: "/main" }}></Redirect>;
  } else {
    return (
      <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
          <h1>Log in </h1>
          <form onChange={handleFormChange} className={styles["form"]}>
            <input
              className={styles["fadeIn second"]}
              type="text"
              name="email"
              placeholder="phone"
            />
            <input
              type="text"
              name="password"
              className={styles["fadeIn third"]}
              placeholder="password"
            />

            <input
              type="submit"
              className={styles["fadeIn fourth"]}
              id="login-button"
              value="Log In"
              onClick={handleSubmit}
            />
          </form>
        </div>
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
