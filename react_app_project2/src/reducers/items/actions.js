export const setItems = (items) => {
    // user: is an object that represents a user
    return {
      type: "SET_ITEMS",
      payload: items,
    };
  };
  export const Favorite = (items) => {
    // user: is an object that represents a user
    return {
      type: "SET_FAVORITE",
      payload: items,
    };
  }; 
  // deleteWatchLater
  export const deleteFavorite = (items) => {
    // user: is an object that represents a user
    return {
      type: "DELETE_FAVORITE",
      payload: items,
    };
  }; 
  export const Cart = (items) => {
    // user: is an object that represents a user
    return {
      type: "SET_CART",
      payload: items,
    };
  }; 
  // deleteWatchLater
  export const deleteCart = (items) => {
    // user: is an object that represents a user
    return {
      type: "DELETE_CART",
      payload: items,
    };
  }; 