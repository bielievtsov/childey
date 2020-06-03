import React, { useState } from "react";
import queryString from "query-string";
import { withRouter, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Create.module.css";

const CreateAppointment = (props) => {
  queryString.parse(props.location.search);
  const { doctorId } = JSON.parse(localStorage.getItem("token"));
  const { token } = JSON.parse(localStorage.getItem("token"));
  const [startDate, setStartDate] = useState(new Date());
  const { patient } = props.location.state;
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);
  const { _id } = patient;

  const handleChange = (e) => {
    const { name } = e.target;
    if (name === "type") {
      setType(e.target.value);
    }
    if (name === "price") {
      setPrice(e.target.value);
    }
    if (name === "duration") {
      setDuration(e.target.value);
    }
  };

  const handleCreateAppointment = () => {
    fetch("http://140.82.32.65:3000/appointment", {
      method: "POST",
      headers: {
        headers: { "x-access-token": token },
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patientId: _id,
        doctorId,
        date: startDate,
        type,
        price,
        duration,
        isPayed: false,
      }),
    }).then(() => {
      setIsRedirect(!isRedirect);
    });
  };

  if (isRedirect) {
    return <Redirect to={{ pathname: "/main" }}></Redirect>;
  } else {
    return (
      <div onChange={handleChange} className={styles["root"]}>
        <div className={styles["items"]}>
          <span>Оберіть дату зустрічі</span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
          />
        </div>
        <div className={styles["i"]}>
          <input type="text" placeholder="Тип" name="type"></input>
          <input type="text" placeholder="Ціна" name="price"></input>
          <input
            type="text"
            placeholder="Тривалість (хв)"
            name="duration"
          ></input>
        </div>
        <div>
          <button onClick={handleCreateAppointment} className={styles["but"]}>
            Призначити
          </button>
        </div>
      </div>
    );
  }
};

export default withRouter(CreateAppointment);
