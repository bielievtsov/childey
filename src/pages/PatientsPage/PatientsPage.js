import React, { useState, useEffect } from "react";
import PatientSearchItem from "../../components/PatientSearchItem/PatientSearchItem";

const PatientsPage = () => {
  const [patients, setPatients] = useState([]);
  const [patientname, setPatientName] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/doctor/:5ec9067ddcd00f392c886dbe/appointments")
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
      });
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setPatientName(e.target.value);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetch("FSDSADASD")
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
      });
  };

  const searchComponent = (
    <div>
      <form onChange={handleChange}>
        {" "}
        <label>Search</label>
        <input type="text" placeholder="Paient's name.."></input>
        <input type="submit" value="Search" onClick={handleSearch}></input>
      </form>
    </div>
  );

  if (patients.length) {
    return (
      <div>
        {searchComponent}
        {patients.map((patient) => {
          return <PatientSearchItem patient={patient}></PatientSearchItem>;
        })}
      </div>
    );
  } else {
    return (
      <div>
        {searchComponent}
        <div>You have no patients for now</div>
      </div>
    );
  }
};

export default PatientsPage;
