import React, { useState } from "react";

const ParamsComponent = ({ paramets }) => {
  const [approve, setApprove] = useState(false);

  const handleAplly = () => {
    setApprove(true);
  };
  const handleDecline = () => {
    setApprove(false);
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
