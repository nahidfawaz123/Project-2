export const setItems = (items) => {
    // user: is an object that represents a user
    return {
      type: "SET_ITEMS",
      payload: items,
    };
  };
  // <Nav.Link >    {state.user.LoggdIn === true? 
  //   <div className="icon-LogOut"> 
  //   <img onClick={logoutuser}  className="img-icon" src={logOut}/>
  //     <p>
  //     {state.user.name }
  //     </p>
      
  //   </div>
  //    : <Link to="/Login"><img className="img-icon" src={profile}/></Link> }</Nav.Link> 
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