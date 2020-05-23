import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);

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
    props.LogIn();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/doctor/" + "5ec9067ddcd00f392c886dbe"
    );
    const responseJSON = await response.json();
    localStorage.setItem("doctor", JSON.stringify(responseJSON));
    responseJSON._id = "5ec9067ddcd00f392c886dbe"
      ? setIsRedirect(true)
      : setIsRedirect(false);
    props.LogIn();
  };

  if (isRedirect) {
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
