import React from "react";
import styles from "./HomePage.module.scss";
import doctor from "../images/doctor.jpeg";
import woman from "../images/woman.png";
import { connect } from "react-redux";

const HomePage = (props) => {
  return (
    <div className={styles["main"]}>
      <div className={styles["user"]}>
        <div>
          <img src={doctor} style={{ width: 300, height: 400 }} alt="doctor" />
        </div>
        <div>
          <h2>Доктор</h2>
          <div className={styles["text"]}>
            Childey - це можливість для Вас, як доктора, значно спростити та
            покращити роботу. Для цього вам стануть у нагоді можливості
            віддаленої комунакціїї з клієнтом та отримання параметрів пацієнтки
            у режимі онлайн. Це допоможе Вам та Вашим пацієнткам почуватися
            комфортніше під час ведення вагітності.
          </div>
        </div>
      </div>
      <div className={styles["user"]}>
        <div>
          <img
            src={woman}
            style={{ width: 300, height: 300 }}
            alt="woman"
          ></img>
        </div>
        <div className={styles["pregnant"]}>
          <h2>Вагітна</h2>
          <div className={styles["text"]}>
            Чи турбувалися Ви про проблеми, які можуть виникнути у Вас підчас
            вагітності? Доктор далеко, щось йде не так з Вами або малюком, а
            наступна консультація не скоро. Звісно, що так. Childey! Ось ваш
            помічник у цій скрутній ситуації. Ви будете інформовані про Вашу
            вагітність, а Ваш доктор буде відстежувати поточні дані та буде з
            вами на зв'язку.
          </div>
          <button className={styles["button"]} onClick={props.QRhid}>
            Почнемо!
          </button>
        </div>
      </div>
    </div>
  );
};

const dispatchPropsToState = (dispatch) => {
  return {
    QRhid: () => {
      dispatch({ type: "QR", payload: true });
    },
  };
};

export default connect(null, dispatchPropsToState)(HomePage);
