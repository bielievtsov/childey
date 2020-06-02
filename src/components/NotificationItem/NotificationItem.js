import React from "react";

const NotificationItem = ({ patient }) => {
  return (
    <div>
      {" "}
      New params from{" "}
      {patient.patient.firstName + " " + patient.patient.lastName}
    </div>
  );
};

export default NotificationItem;
