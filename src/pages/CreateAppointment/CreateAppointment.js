import React, { useState } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAppointment = (props) => {
  queryString.parse(props.location.search);
  const { doctorId } = JSON.parse(localStorage.getItem("token"));
  const { token } = JSON.parse(localStorage.getItem("token"));
  const [startDate, setStartDate] = useState(new Date());
  const { patient } = props.location.state;
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
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
    console.log(_id, doctorId, startDate, type, price, duration);
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
    });
  };

  return (
    <div onChange={handleChange}>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          timeInputLabel="Time:"
          dateFormat="MM/dd/yyyy h:mm aa"
          showTimeInput
        />
      </div>
      <div>
        <input type="text" placeholder="Appointment's type" name="type"></input>
        <input
          type="text"
          placeholder="Appointment's price"
          name="price"
        ></input>
        <input
          type="text"
          placeholder="Appointment's duration"
          name="duration"
        ></input>
      </div>
      <div>
        <button onClick={handleCreateAppointment}>Create an appointment</button>
      </div>
    </div>
  );
};

export default withRouter(CreateAppointment);
