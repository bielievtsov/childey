const initialState = {
  showLogIn: true,
  isLoggedIn: false,
  doctorId: "",
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
    default: {
      return {
        ...state,
      };
    }
  }
};

export default rootReducer;
