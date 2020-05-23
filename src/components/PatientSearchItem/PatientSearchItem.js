import React from "react";

const PatientSearchItem = ({ patient }) => {
  return (
    <div>
      <div>{patient.firstName + " " + patient.lastName}</div>
    </div>
  );
};

export default PatientSearchItem;
