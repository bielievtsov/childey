const initialState = {
  showLogIn: true,
  isLoggedIn: false,
  doctorId: "",
  noficications: 0,
  showQR: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN": {
      return {
        ...state,
        showLogIn: !state.showLogIn,
        isLoggedIn: !state.isLoggedIn,
        doctorId: state.doctorId,
      };
    }
    case "QR": {
      console.log(action.payload);
      return {
        ...state,
        showLogIn: !state.showLogIn,
        isLoggedIn: !state.isLoggedIn,
        doctorId: state.doctorId,
        showQR: action.payload,
      };
    }
    case "NOTIF": {
      let res = 0;
      action.payload.map((el) => {
        if (!el.checked) {
          res++;
        }
      });
      return {
        ...state,
        noficications: res,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default rootReducer;
