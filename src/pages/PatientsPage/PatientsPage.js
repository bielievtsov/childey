import React, { useState, useEffect } from "react";
import PatientSearchItem from "../../components/PatientSearchItem/PatientSearchItem";

const PatientsPage = () => {
  const [patients, setPatients] = useState([]);
  const [patientname, setPatientName] = useState("");
  const { doctorId } = JSON.parse(localStorage.getItem("token"));
  const { token } = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    fetch(`http://140.82.32.65:3000/doctor/${doctorId}/patients`, {
      headers: { "x-access-token": token },
    })
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
      });
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setPatientName(e.target.value);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(
      `http://140.82.32.65:3000/doctor/${doctorId}/patient/${patientname}`,
      {
        headers: { "x-access-token": token },
      }
    )
      .then((response) => {
        const res = response.json();
        return res;
      })
      .then((data) => {
        setPatients(data);
        return data;
      });
  };

  const searchComponent = (
    <div>
      <form onChange={handleChange}>
        {" "}
        <label>Search</label>
        <input type="text" name="name" placeholder="Paient's name.."></input>
        <input type="submit" value="Search" onClick={handleSearch}></input>
      </form>
    </div>
  );
  let i = 0;
  if (patients.length) {
    return (
      <div>
        {searchComponent}
        {patients.map((patient) => {
          return (
            <PatientSearchItem patient={patient} key={i++}></PatientSearchItem>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        {searchComponent}
        <div>No patients for now</div>
      </div>
    );
  }
};

export default PatientsPage;
