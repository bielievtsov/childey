import React, { useState } from "react";

const ParamsComponent = ({ paramets }) => {
  const { token } = JSON.parse(localStorage.getItem("token"));

  const handleAplly = () => {
    fetch(`http://140.82.32.65:3000/params/${paramets._id}`, {
      method: "PUT",
      headers: { "x-access-token": token, "Content-Type": "application/json" },
      body: JSON.stringify({
        answer: true,
        comment: "comment",
      }),
    });
  };
  const handleDecline = () => {
    fetch(`http://140.82.32.65:3000/params/${paramets._id}`, {
      method: "PUT",
      headers: { "x-access-token": token, "Content-Type": "application/json" },
      body: JSON.stringify({
        answer: false,
        comment: "comment",
      }),
    });
  };
  return (
    <div>
      <h2>Params figures</h2>
      <div>
        <div>Weight: {paramets.weight} tonns</div>
        <div>Temperature : {paramets.temperature} C</div>
        <div>Bellie size : {paramets.bellySize} cm</div>
      </div>
      <div>
        <button onClick={handleAplly}>Approved</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default ParamsComponent;
