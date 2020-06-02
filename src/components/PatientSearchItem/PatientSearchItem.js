import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";

const PatientSearchItem = ({ patient }) => {
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
      <div onClick={handleRedirect}>
        <div>{patient.firstName + " " + patient.lastName}</div>
      </div>
    );
  }
};

export default withRouter(PatientSearchItem);
