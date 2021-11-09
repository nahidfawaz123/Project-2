export const login = (user) => {
    console.log(user);
    // user: is an object that represents a user
    return {
      type: "LOG_IN",
      payload: user,
    };
  };
  export const logout = (user) => {
    // user: is an object that represents a user
    return {
      type: "LOG_OUT",
      payload: user,
    };
  };
  export const singUp = (user) => {
      console.log("action"+user.email)
    // user: is an object that represents a user
    return {
      type: "SING_UP",
      payload: user,
    };
  };