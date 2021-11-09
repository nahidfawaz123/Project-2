
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
    {
        name:"تنسيق زواجات",
        type:"wedding",
        img1:"https://c.top4top.io/p_2139rhq8z1.png",
        img2:'https://g.top4top.io/p_21397q8ww1.png',
        price:200
    },
    {
        name:"مناسبات التخرج",
        type:"graduate",
        img1:"https://serving.photos.photobox.com/87604802fc2b8155780337aaaa55b13c2d62a848ba6b11f916c10d9c801dcd7cb81460b2.jpg",
        img2:"https://serving.photos.photobox.com/87604802fc2b8155780337aaaa55b13c2d62a848ba6b11f916c10d9c801dcd7cb81460b2.jpg",
        price:1000
    },
    {
        name:"أعياد الميلاد",
        type:"birthday",
        img1:"https://serving.photos.photobox.com/684817712dff1a01945ab579831a0738038594ac938ca64044893eb4b97f01cfc9a9bbbb.jpg",
        img2:"https://serving.photos.photobox.com/684817712dff1a01945ab579831a0738038594ac938ca64044893eb4b97f01cfc9a9bbbb.jpg",
        price:900
    },
    {
        name:"استقبال المواليد",
        type:"baby",
        img1:"https://serving.photos.photobox.com/85080922689d2bda12964db76cbefb1a3fdaebef02c8a1fdeed89904605b4ad5505d5fdd.jpg",
        img2:"https://serving.photos.photobox.com/85080922689d2bda12964db76cbefb1a3fdaebef02c8a1fdeed89904605b4ad5505d5fdd.jpg",
        price:600
    },
    {
        name:"مسكه 1",
        type:"masks",
        img1:"https://serving.photos.photobox.com/28922068895e5ece2b80030e18166566f50a08330cd65f9f0539a1dbe8fbfd315a6b60c9.jpg",
        img2:"https://serving.photos.photobox.com/28922068895e5ece2b80030e18166566f50a08330cd65f9f0539a1dbe8fbfd315a6b60c9.jpg",
        price:200
    },
    {
        name:"مسكه 2",
        type:"masks",
        img1:"https://serving.photos.photobox.com/28922068895e5ece2b80030e18166566f50a08330cd65f9f0539a1dbe8fbfd315a6b60c9.jpg",
        img2:"https://serving.photos.photobox.com/28922068895e5ece2b80030e18166566f50a08330cd65f9f0539a1dbe8fbfd315a6b60c9.jpg",
        price:500
    },
    {
        name:"البــالية",
        type:"Ballet",
        img1:"https://test.easacc.com/noura/wp-content/uploads/2021/01/New-Project-4.png",
        img2:"https://test.easacc.com/noura/wp-content/uploads/2021/01/New-Project-4.png",
        price:500
    },
    {
        name:"الشـرقـي",
        type:"Sharqi",
        img1:"https://test.easacc.com/noura/wp-content/uploads/2021/01/New-Project-6.png",
        img2:"https://test.easacc.com/noura/wp-content/uploads/2021/01/New-Project-6.png",
        price:800
    },
    {
        name:"الاستعـراض",
        type:"aliastierad",
        img1:"https://test.easacc.com/noura/wp-content/uploads/2021/01/13f1bc1ac7469dfdf3ea0b2787510782.jpg",
        img2:"https://test.easacc.com/noura/wp-content/uploads/2021/01/13f1bc1ac7469dfdf3ea0b2787510782.jpg",
        price:800
    }


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
  