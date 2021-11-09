
const initialState = {
    User: [],
  };
  // action -> {type: "ABC", payload: 2}
  const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
   
      case "SET_USER":
        return {
            videos: payload,
        };
      default:
        return state;
    }
  };
  
  export default UserReducer;
  
