import React from "react";
import doctor from "../images/doctor.jpeg";
import woman from "../images/woman.png";

const HomePage = () => {
  return (
    <div>
      <div>
        <div>
          <img src={doctor} style={{ width: 300, height: 400 }}></img>
        </div>
        <div>
          <h2>Doctor</h2>
          <div>
            Childey is an ability for you as a doctor to make your job easier
            and more efficient, since you are able to interact with your
            patients remotely and obtain required information to maintain
            pregnancy as comfortable as possible for both you and expectant.
          </div>
          <button>Start</button>
        </div>
      </div>
      <div>
        <div>
          <img src={woman} style={{ width: 300, height: 300 }}></img>
        </div>
        <div>
          <h2>Pregnant</h2>
          <div>
            Have you ever had an anxiety of having problems during pregnancy,
            that something is wrong but the doctor is far away and you have a
            doctor's appointment just in a week? No worries anymore! Childey!
            This is the decision to keep your nerves calm. The professionals
            will help you any time you want it and won't let you miss any
            unlikable changes in your or your baby's health.
          </div>
          <button>Start</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
