export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

// action 생성기
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data: data,
  };
};
export const logoutAction = (data) => {
  return {
    type: "LOG_OUT",
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
