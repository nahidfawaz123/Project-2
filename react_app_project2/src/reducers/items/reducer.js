
const initialState = {
    Items: [{
        name:'تقديمات دولمة',
        type: 'diner',
        img1: 'http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.04.12-AM-300x300.jpeg',
        img2 :'http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.04.32-AM-300x300.jpeg',
        price:50,
    },
    {
        name:'تقديمات أرتال',
        type: 'diner',
        img1: 'https://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.14.43-AM-300x300.jpeg',
        img2 :'http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.15.48-AM-300x300.jpeg',
        price:40,
    },
    {
        name:'تقديمات لاديم',
        type: 'diner',
        img1: 'https://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.17.49-AM-300x300.jpeg',
        img2 :'http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.18.28-AM-300x300.jpeg',
        price:60,
    },
    {
        name:'تقديمات الرحى',
        type: 'diner',
        img1: 'https://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.04.20-AM.jpeg',
        img2 :'http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.06.12-AM-1-300x300.jpeg',
        price:50,
    },
    {
        name:'تقديمات قدر',
        type: 'diner',
        img1: 'https://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.04.01-AM-300x300.jpeg',
        img2 :'http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.05.27-AM-300x300.jpeg',
        price:45,
    },


],
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
                      alert("The cart already exists")
                      break;
                  }  
            }
            if(inCart === false){
                CartList.push(payload)
                console.log(CartList);

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
  