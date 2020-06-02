import React, { useState, useEffect } from "react";
import doctor from "../../images/doctor.jpeg";

const ProfilePage = () => {
  const [fullDoctor, setFullDoctor] = useState();
  const { doctorId } = JSON.parse(localStorage.getItem("token"));
  const { token } = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://140.82.32.65:3000/doctor/" + doctorId,
        {
          headers: { "x-access-token": token },
        }
      );
      const data = await response.json();
      setFullDoctor(data);
    };
    fetchData();
  }, []);

  /*const {
    dob,
    email,
    firstName,
    generalPatientNumber,
    lastName,
    phoneNumber,
    rank,
    rating,
    workingDays,
    workingHours,
  } = fullDoctor;*/

  return (
    <div>
      <div>
        <img src={doctor} style={{ width: 200, height: 300 }}></img>
      </div>
      <div>
        <div>Name : {"firstName"}</div>
        <div>Secand name : {"lastName"}</div>
        <div>Email : {"email"}</div>
        <div>Phone number : {"phoneNumber"}</div>
        <div>Rank : {"rank"}</div>
        <div>Date of birth : {"new Date(dob).getDate()"}</div>
        <div>
          Working days :{" "}
          {"workingDays[0] + " - " + workingDays[workingDays.length - 1]"}
        </div>
        <div>Working hours : {"workingHours"}</div>
        <div> Clients : {"generalPatientNumber"}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
