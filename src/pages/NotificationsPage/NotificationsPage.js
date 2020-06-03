import React, { useState, useEffect } from "react";
import styles from "./Page.module.css";
import NotificationItem from "../../components/NotificationItem/NotificationItem";
import { connect } from "react-redux";

const NotificationsPage = (props) => {
  const [notifications, setNotifications] = useState([]);
  const { doctorId } = JSON.parse(localStorage.getItem("token"));
  const { token } = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    fetch(`http://140.82.32.65:3000/params/${doctorId}`, {
      headers: { "x-access-token": token },
    })
      .then((res) => res.json())
      .then((data) => {
        props.Notif(data);
        setNotifications(data);
      });
  }, []);
  let k = 0;
  if (notifications.length) {
    return (
      <div className={styles["main"]}>
        {notifications.map((patient) => {
          if (!patient.checked) {
            return (
              <NotificationItem patient={patient} key={k++}></NotificationItem>
            );
          }
        })}
      </div>
    );
  } else {
    return <div className={styles["main"]}>Нема повідомлень</div>;
  }
};

const dispatchPropsToState = (dispatch) => {
  return {
    Notif: (not) => {
      dispatch({ type: "NOTIF", payload: not });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(
  mapStateToProps,
  dispatchPropsToState
)(NotificationsPage);
