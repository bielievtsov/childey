const initialState = {
  showLogIn: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN": {
      return {
        ...state,
        showLogIn: !state.showLogIn,
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
