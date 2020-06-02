import React, { useState } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

const CreateAppointment = (props) => {
  queryString.parse(props.location.search);
  const { doctorId } = JSON.parse(localStorage.getItem("token"));
  const { token } = JSON.parse(localStorage.getItem("token"));
  const [selectedPatient, setSelectedpatient] = useState({});

  return <div></div>;
};

export default withRouter(CreateAppointment);
