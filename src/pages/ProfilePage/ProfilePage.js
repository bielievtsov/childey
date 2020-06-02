import React, { useState, useEffect } from "react";
import doctor from "../../images/doctor.jpeg";

const ProfilePage = () => {
  const [fullDoctor, setFullDoctor] = useState({});
  const { doctorId } = JSON.parse(localStorage.getItem("token"));
  const { token } = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    fetch("http://140.82.32.65:3000/doctor/" + doctorId, {
      headers: { "x-access-token": token },
    })
      .then((response) => response.json())
      .then((data) => {
        setFullDoctor(data);
        return data;
      })
      .then(() => {
        console.log(fullDoctor);
      });
  }, []);

  console.log("fullDoctor", fullDoctor);

  return (
    <div>
      <div>
        <img src={doctor} style={{ width: 200, height: 300 }}></img>
      </div>
      <div>
        <div>Name : {fullDoctor.firstName || "no name"}</div>
        <div>Secand name : {fullDoctor.lastName}</div>
        <div>Email : {fullDoctor.email}</div>
        <div>Phone number : {fullDoctor.phoneNumber}</div>
        <div>Rank : {fullDoctor.rank}</div>
        <div>Date of birth : {new Date(fullDoctor.dob).getDate()}</div>
        <div>
          Working days :{" "}
          {fullDoctor.hasOwnProperty("workingDays")
            ? fullDoctor["workingDays"][0] +
              " - " +
              fullDoctor["workingDays"][fullDoctor["workingDays"].length - 1]
            : "nothing"}
        </div>
        <div>Working hours : {fullDoctor["workingHours"]}</div>
        <div> Clients : {fullDoctor.generalPatientNumber}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
