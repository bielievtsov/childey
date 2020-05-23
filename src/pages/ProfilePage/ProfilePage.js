import React from "react";
import doctor from "../../images/doctor.jpeg";

const ProfilePage = () => {
  const {
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
  } = JSON.parse(localStorage.getItem("doctor"));

  return (
    <div>
      <div>
        <img src={doctor} style={{ width: 200, height: 300 }}></img>
      </div>
      <div>
        <div>Name : {firstName}</div>
        <div>Secand name : {lastName}</div>
        <div>Email : {email}</div>
        <div>Phone number : {phoneNumber}</div>
        <div>Rank : {rank}</div>
        <div>Date of birth : {new Date(dob).getDate()}</div>
        <div>Name : {firstName}</div>
        <div>
          Working days :{" "}
          {workingDays[0] + " - " + workingDays[workingDays.length - 1]}
        </div>
        <div>Working hours : {workingHours}</div>
        <div> Clients : {generalPatientNumber}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
