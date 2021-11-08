export const setUser = (videos) => {
    // user: is an object that represents a user
    return {
      type: "SET_USER",
      payload: videos,
    };
  };
//   export const WatchLater = (videos) => {
//     // user: is an object that represents a user
//     return {
//       type: "WATCH_LATER",
//       payload: videos,
//     };
//   }; 
//   // deleteWatchLater
//   export const deleteWatchLater = (videos) => {
//     // user: is an object that represents a user
//     return {
//       type: "DELETE_WATCHLATER",
//       payload: videos,
//     };
//   }; 