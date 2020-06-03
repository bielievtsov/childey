import React, { useState, useEffect } from "react";
import styles from "./ProfilePage.module.css";
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
    <div className={styles["main"]}>
      <div>
        <img src={doctor} alt="doctor"></img>
      </div>
      <div className={styles["text"]}>
        <div>Ім'я : {fullDoctor.firstName || "no name"}</div>
        <div>Прізвище : {fullDoctor.lastName}</div>
        <div>Пошта : {fullDoctor.email}</div>
        <div>Телефон : {fullDoctor.phoneNumber}</div>
        <div>Рейтинг : {fullDoctor.rank}</div>
        <div>Дата народження : {new Date(fullDoctor.dob).getDate()}</div>
        <div>
          Дні прийому :{" "}
          {fullDoctor.hasOwnProperty("workingDays")
            ? fullDoctor["workingDays"].join(" - ")
            : "nothing"}
        </div>
        <div>Часи прийому : {fullDoctor["workingHours"]}</div>
        <div> Кількість клієнтів : {fullDoctor.generalPatientNumber}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
