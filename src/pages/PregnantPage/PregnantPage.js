import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { withRouter, Redirect } from "react-router-dom";
import ParamsComponent from "../../components/ParamsComponent/ParamsComponent";

const PregnantPage = (props) => {
  queryString.parse(props.location.search);
  const { doctorId } = JSON.parse(localStorage.getItem("token"));
  const { token } = JSON.parse(localStorage.getItem("token"));
  const { patient } = props.location.state;
  const { _id } = patient;
  const [isRedirect, setIsRedirect] = useState(false);
  const [paramets, setParametrs] = useState([]);

  const handleCreateAppointment = () => {
    setIsRedirect(!isRedirect);
  };

  useEffect(() => {
    fetch(`http://140.82.32.65:3000/params/${doctorId}`, {
      headers: { "x-access-token": token },
    })
      .then((res) => res.json())
      .then((data) => {
        setParametrs(data);
        return data;
      })
      .then((d) => {
        console.log("paramets", d);
      });
  }, []);
  let k = 0;
  if (isRedirect) {
    return (
      <Redirect
        to={{
          pathname: "/create-appointment",
          state: { patient },
        }}
      ></Redirect>
    );
  } else {
    return (
      <div>
        <div>
          <div>
            <img></img>
            <div>
              <div>First name: {patient.firstName}</div>
              <div>Last name: {patient.lastName}</div>
            </div>
          </div>
          <div>
            <div>Age: {2020 - new Date(patient.dob).getFullYear()}</div>
            <div>Number: {patient.phoneNumber}</div>
          </div>
          <div>
            <button onClick={handleCreateAppointment}>
              Create am appointment
            </button>
          </div>
        </div>
        {paramets.map((el) => {
          if (el.patient._id == _id && el.checked === false) {
            return <ParamsComponent paramets={el} key={k++}></ParamsComponent>;
          }
        })}
      </div>
    );
  }
};

export default withRouter(PregnantPage);
