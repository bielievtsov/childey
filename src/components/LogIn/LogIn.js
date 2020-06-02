import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

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
      <div style={{ display: props.showLogIn ? "block" : "none" }}>
        <form onChange={handleFormChange}>
          <button onClick={handleAbortLogIn}>X</button>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="type in your email"
              className="form-control form-control"
            />
          </div>
          <div>
            <label>Passowrd</label>
            <input
              type="text"
              name="password"
              placeholder="enter your password"
              className="form-control form-control"
            />
          </div>
          <div>
            <label>Submit</label>
            <input
              type="submit"
              className="form-control form-control"
              value="submit"
              onClick={handleSubmit}
            />
          </div>
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
