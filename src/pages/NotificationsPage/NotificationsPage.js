import React, { useState, useEffect } from "react";
import NotificationItem from "../../components/NotificationItem/NotificationItem";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("ТУТ БУДЕТ НОТИФИКАЦИИ")
      .then((response) => response.json())
      .then((data) => setNotifications(data));
  }, []);
  if (notifications.length) {
    return (
      <div>
        {notifications.map((patient) => {
          return <NotificationItem patient={patient}></NotificationItem>;
        })}
      </div>
    );
  } else {
    return <div> You have no notifications</div>;
  }
};

export default NotificationsPage;
