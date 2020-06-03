import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styles from "./Item.module.css";

const NotificationItem = ({ patient }) => {
  const [isRedirect, setIsRedirect] = useState(false);

  const handleRedirect = () => {
    setIsRedirect(!isRedirect);
  };

  if (isRedirect) {
    return (
      <Redirect
        to={{
          pathname: "/pregnantpage",
          state: { patient },
        }}
      ></Redirect>
    );
  } else {
    return (
      <div onClick={handleRedirect} className={styles["item"]}>
        {" "}
        Надійшли нові параметри{" "}
        {patient.patient.firstName + " " + patient.patient.lastName}
      </div>
    );
  }
};

export default NotificationItem;
