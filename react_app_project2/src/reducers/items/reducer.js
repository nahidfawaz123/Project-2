
const initialState = {
    Items: [],
    Favorite: [],
    Cart: []
  };
  // action -> {type: "ABC", payload: 2}
  const ItemsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
   
      case "SET_ITEMS":
        return {
            Items: payload,
            Favorite: state.Favorite,
            Cart: state.Cart
        };
        //add to favorite
        case "SET_FAVORITE":
            // the payload is an object
            const FavoriteList = state.Favorite.slice()
            console.log(FavoriteList.length);
            let x=false;
          for (let i=0;i<FavoriteList.length;i++){
              if(FavoriteList[i].name === payload.name){
                  x=true
                  alert("The items already exists")
                  break;
              }  
        }
        if(x === false){
            FavoriteList.push(payload)
        }
        
           
            return {
                Items: state.Items,
                Favorite: FavoriteList,
                Cart: state.Cart
            };
        //    deleteWatchLater
        case "DELETE_FAVORITE":
            return {

                Items: payload,
                Favorite: state.Favorite.filter((element) => {
                    return element.name !== payload.name;
               
                }),
            };
            case "SET_CART":
                // the payload is an object
                const CartList = state.Cart.slice()
                console.log(CartList.length);
                let inCart=false;
              for (let i=0;i<CartList.length;i++){
                  if(CartList[i].name === payload.name){
                    inCart=true
                      alert("The items already exists")
                      break;
                  }  
            }
            if(inCart === false){
                FavoriteList.push(payload)
            }
            
               
                return {
                    Items: state.Items,
                    Favorite: state.Favorite,
                    Cart: CartList
                };
            //    deleteWatchLater
            case "DELETE_CART":
                return {
    
                    Items: payload,
                    Cart: state.Cart.filter((element) => {
                        return element.name !== payload.name;
                   
                    }),
                };

      default:
        return state;
    }
  };
  
  export default ItemsReducer;
  