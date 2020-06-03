import React, { useState } from "react";
import styles from "./Item.module.css";

const ParamsComponent = ({ paramets, setProps, p }) => {
  const { token } = JSON.parse(localStorage.getItem("token"));
  const [comment, setComment] = useState("Все добре!");

  const handleChange = (e) => {
    if (e.target.name === "comment") {
      setComment(e.target.value);
    }
  };

  const handleAplly = () => {
    fetch(`http://140.82.32.65:3000/params/${paramets._id}`, {
      method: "PUT",
      headers: { "x-access-token": token, "Content-Type": "application/json" },
      body: JSON.stringify({
        answer: true,
        comment,
      }),
    }).then(() => {
      setProps();
    });
  };

  const handleDecline = () => {
    fetch(`http://140.82.32.65:3000/params/${paramets._id}`, {
      method: "PUT",
      headers: { "x-access-token": token, "Content-Type": "application/json" },
      body: JSON.stringify({
        answer: false,
        comment,
      }),
    }).then(() => {
      setProps();
    });
  };
  return (
    <div className={styles["root"]} onChange={handleChange}>
      <h2>Нові параметри</h2>
      <div>
        <div>Вага : {paramets.weight} кг</div>
        <div>Температура : {paramets.temperature} C</div>
        <div>Об'єм живота : {paramets.bellySize} см</div>
        <div>
          <input
            placeholder="Коментар"
            type="text"
            name="comment"
            className={styles["comment"]}
          ></input>
        </div>
      </div>
      <div className={styles["buttons"]}>
        <button onClick={handleAplly}>Прийняти</button>
        <button onClick={handleDecline}>Відхилити</button>
      </div>
    </div>
  );
};

export default ParamsComponent;
