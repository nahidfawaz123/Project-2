const initialState = {
  users: [
    {
      name: "admin",
      Password: 1,
      LoggdIn: false,
    },
  ],
  user: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOG_IN":
      const usersList = state.users.slice();
      console.log(usersList);
      let inUsers = false;
      for (let i = 0; i < usersList.length; i++) {
        console.log(usersList.Password);
        if (usersList[i].name === payload.name) {
          alert("Yes");
          inUsers = true;
          break;
        }
      }
      if (inUsers === false) {
        alert("You don't have an account");

        return state;
      }
      console.log(payload);
      return {
        users: state.users,
        user: payload,
      };
    // new rejecter
    case "SING_UP":
      const userList = state.users.slice();

      let inUser = false;
      for (let i = 0; i < userList.length; i++) {
        if (userList[i].name === payload.name) {
          inUser = true;
          alert("User already exists Log in");
          console.log(userList);
          break;
        }
      }
      if (inUser === false) {
        userList.push(payload);
      }
      // userList.push(payload)
      return {
        users: userList,
        user: payload,
      };

    case "LOG_OUT":
      return {
        user: payload,
        users: state.users,
      };
    default:
      return state;
  }
};

export default userReducer;
