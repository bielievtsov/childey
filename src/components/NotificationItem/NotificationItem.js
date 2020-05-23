import React from "react";

const NotificationItem = ({ patient }) => {
  return (
    <div> New params from {patient.firstName + " " + patient.lastName}</div>
  );
};

export default NotificationItem;
