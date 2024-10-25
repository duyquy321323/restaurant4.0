export const login = (userData) => {
  return {
    type: "LOGINSUCCESS",
    userData: userData,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const account = (state = null, action) => {
  switch (action.type) {
    case "LOGINSUCCESS":
      return action.userData;
    case "LOGOUT":
      return;
    default:
      return state;
  }
};
