import React, { useState, useEffect } from "react";
import NotificationItem from "../../components/NotificationItem/NotificationItem";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const { doctorId } = JSON.parse(localStorage.getItem("token"));
  const { token } = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    fetch(`http://140.82.32.65:3000/params/${doctorId}`, {
      headers: { "x-access-token": token },
    })
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data);
        return data;
      })
      .then((d) => {
        console.log("notifications", d);
      });
  }, []);
  let k = 0;
  if (notifications.length) {
    return (
      <div>
        {notifications.map((patient) => {
          return (
            <NotificationItem patient={patient} key={k++}></NotificationItem>
          );
        })}
      </div>
    );
  } else {
    return <div> You have no notifications</div>;
  }
};

export default NotificationsPage;
