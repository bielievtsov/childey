const initialState = {
  showLogIn: true,
  isLoggedIn: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN": {
      console.log("LOG_IN");
      return {
        ...state,
        showLogIn: !state.showLogIn,
        isLoggedIn: !state.isLoggedIn,
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
