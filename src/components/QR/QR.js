import React, { useState } from "react";
import QRimg from "../../images/QRCode.png";
import styles from "./QR.module.css";
import { connect } from "react-redux";

const QR = (props) => {
  const { showQR } = props;

  return (
    <div
      className={styles["main"]}
      style={{ display: showQR ? "block" : "none" }}
      onClick={props.QRhid}
    >
      <div>
        <img src={QRimg} alt="QR"></img>
      </div>
    </div>
  );
};

const dispatchPropsToState = (dispatch) => {
  return {
    QRhid: () => {
      dispatch({ type: "QR", payload: false });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    showQR: state.showQR,
  };
};

export default connect(mapStateToProps, dispatchPropsToState)(QR);
