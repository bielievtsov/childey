import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { withRouter, Redirect } from "react-router-dom";
import billie from "../../images/billie.png";
import ParamsComponent from "../../components/ParamsComponent/ParamsComponent";
import styles from "./Page.module.css";

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
      <div className={styles["root"]}>
        <div className={styles["profile"]}>
          <div>
            <div>
              <img alt="billie" src={billie}></img>
              <div>
                <div>Ім'я: {patient.firstName}</div>
                <div>Прізвище: {patient.lastName}</div>
              </div>
            </div>
            <div>
              <div>Вік: {2020 - new Date(patient.dob).getFullYear()}</div>
              <div>Телефон: {patient.phoneNumber}</div>
            </div>
          </div>
          <div>
            <button onClick={handleCreateAppointment} className={styles["but"]}>
              Назначити зустріч
            </button>
          </div>
        </div>
        <div className={styles["list"]}>
          {paramets.map((el) => {
            if (el.patient._id === _id && el.checked === false) {
              return (
                <ParamsComponent paramets={el} key={k++}></ParamsComponent>
              );
            }
          })}
        </div>
      </div>
    );
  }
};

export default withRouter(PregnantPage);
