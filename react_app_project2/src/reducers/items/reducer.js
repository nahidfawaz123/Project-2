
const initialState = {
    Items: [{
        name:'تقديمات دولمة',
        type: 'dinner',
        img1: 'http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.04.12-AM-300x300.jpeg',
        img2 :'http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.04.32-AM-300x300.jpeg',
        price:6000,
    },
    {
        name:'تقديمات أرتال',
        type: 'dinner',
        img1: 'https://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.14.43-AM-300x300.jpeg',
        img2 :'http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.15.48-AM-300x300.jpeg',
        price:4500,
    },
    {
        name:'تقديمات لاديم',
        type: 'dinner',
        img1: 'https://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.17.49-AM-300x300.jpeg',
        img2 :'http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.18.28-AM-300x300.jpeg',
        price:7600,
    },
    {
        name:'تقديمات الرحى',
        type: 'dinner',
        img1: 'https://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.04.20-AM.jpeg',
        img2 :'http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.06.12-AM-1-300x300.jpeg',
        price:5700,
    },
    {
        name:'تقديمات قدر',
        type: 'dinner',
        img1: 'https://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.04.01-AM-300x300.jpeg',
        img2 :'http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.05.27-AM-300x300.jpeg',
        price:4500,
    },
    {
        name:"1 تنسيق زواجات",
        type:"wedding",
        img1:"https://c.top4top.io/p_2139rhq8z1.png",
        img2:'https://g.top4top.io/p_21397q8ww1.png',
        price:8000,
    },
    {
      name:"2 تنسيق زواجات",
      type:"wedding",
      img1:"https://h.top4top.io/p_2139565xt1.png",
      img2:'https://i.top4top.io/p_2139ngev62.png',
      price:4500
  },
  {
    name:"3 تنسيق زواجات",
    type:"wedding",
    img1:"https://j.top4top.io/p_2139ju10w3.png",
    img2:'https://k.top4top.io/p_2139rfrlo4.png',
    price:4100
},
{
  name:"4 تنسيق زواجات",
  type:"wedding",
  img1:"https://j.top4top.io/p_2139hqxf33.png",
  img2:'https://i.top4top.io/p_2139dm68r2.png',
  price:2000
},
{
  name:"5 تنسيق زواجات",
  type:"wedding",
  img1:"https://k.top4top.io/p_21392hkql4.png",
  img2:'https://l.top4top.io/p_2139lamu05.png',
  price:3200
},
{
  name:"6 تنسيق زواجات",
  type:"wedding",
  img1:"https://a.top4top.io/p_2139nabrr6.png",
  img2:'https://b.top4top.io/p_21394pq5b7.png',
  price:2400
},
{
  name:"7 تنسيق زواجات",
  type:"wedding",
  img1:"https://c.top4top.io/p_21393s6hz8.png",
  img2:'https://d.top4top.io/p_21392gd7a9.png',
  price:9200
},
{
  name:"8 تنسيق زواجات",
  type:"wedding",
  img1:"https://e.top4top.io/p_213917lex10.png",
  img2:'https://d.top4top.io/p_2139gs4vm1.png',
  price:2100
},
{
  name:"9 تنسيق زواجات",
  type:"wedding",
  img1:"https://l.top4top.io/p_21394icwu1.png ",
  img2:'https://a.top4top.io/p_2139vvsf42.png',
  price:3400
},
    {
        name:"1 مناسبات التخرج",
        type:"graduate",
        img1:"https://m.media-amazon.com/images/I/810QoaqnoYS._AC_SX679_.jpg",
        img2:"https://m.media-amazon.com/images/I/71xrQyNILVS._AC_SX679_.jpg",
        price:1500
    },
    {
      name:"2 مناسبات التخرج",
      type:"graduate",
      img1:"https://mzadqatar.com//uploads/images/2020/07/12/11077622-c3de944b1e.jpg",
      img2:"https://mzadqatar.com/uploads/images/2020/07/12/11077622-b3d1cd5703.jpg",
      price:1600
  },
  {
    name:"3 مناسبات التخرج",
    type:"graduate",
    img1:"https://media.zid.store/cdn-cgi/image/f=auto/https://media.zid.store/e1dbbc32-5ba5-4622-8590-a2f69b237df1/941ceefe-3705-44be-a43f-250f10f5f99d.jpeg",
    img2:"https://pbs.twimg.com/media/Ep2NaU6W4AIGAFH.jpg",
    price:1100
},
{
  name:"4 مناسبات التخرج",
  type:"graduate",
  img1:"https://media.zid.store/cdn-cgi/image/f=auto/https://media.zid.store/e1dbbc32-5ba5-4622-8590-a2f69b237df1/a7ddb334-2dc8-4921-835a-888e8214cae2.jpeg",
  img2:"https://alqusor.com.sa/image/cache/catalog/product/%20%D8%A7%D9%84%D9%83%D9%8A%D9%83/%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/-%D8%AA%D8%AE%D8%B1%D8%AC-10-%D8%A7%D8%B4%D8%AE%D8%A7%D8%B5-3-262.50-%D8%B1%D9%8A%D8%A7%D9%84-550x550.jpg",
  price:1900
},

{
  name:"5 مناسبات التخرج",
  type:"graduate",
  img1:"https://media.zid.store/cdn-cgi/image/f=auto/https://media.zid.store/e1dbbc32-5ba5-4622-8590-a2f69b237df1/18565f82-fc52-4e40-b163-5c89d09b9d4c.jpeg",
  img2:"https://cdn.salla.sa/vylbE/CJC8lPjm915dKKrbIDFGEbg0vuqHkShGStzLiqb9.jpg",
  price:1500
},
{
  name:"6 مناسبات التخرج",
  type:"graduate",
  img1:"https://media.zid.store/cdn-cgi/image/f=auto/https://media.zid.store/e1dbbc32-5ba5-4622-8590-a2f69b237df1/9a6c3f6c-75ec-46be-a02b-216c7ae9cbd0.jpg",
  img2:"https://pbs.twimg.com/media/ErsWKFBXIAAK6w8.jpg",
  price:2000
},
   
    {
      name:"1 أعياد الميلاد",
      type:"birthday",
      img1:"https://i.etsystatic.com/26372378/r/il/ed56c6/2725091656/il_1588xN.2725091656_40i7.jpg",
      img2:"https://i.etsystatic.com/26372378/r/il/cf96be/2725091422/il_794xN.2725091422_yn35.jpg",
      price:1300
  },
  {
    name:"2 أعياد الميلاد",
    type:"birthday",
    img1:"https://i.pinimg.com/564x/70/12/a1/7012a156fb4aaa0ac9d72c789272e754.jpg",
    img2:"https://i.pinimg.com/564x/b3/d8/e6/b3d8e6e42a16b31860ee66fecc3c722d.jpg",
    price:1700
},
{
  name:"3 أعياد الميلاد",
  type:"birthday",
  img1:"https://i.pinimg.com/564x/5a/c4/63/5ac463318e9e82c4a41b32e0fbaae5c7.jpg",
  img2:"https://i.pinimg.com/564x/f8/58/5b/f8585b9a0b2f6368176b0bc5df8f3f42.jpg",
  price:5000
},
{
  name:"4 أعياد الميلاد",
  type:"birthday",
  img1:"https://i.pinimg.com/564x/45/f0/13/45f013b8ddbaeac31d6655c4e61f0c1b.jpg",
  img2:"https://i.pinimg.com/564x/3b/a7/04/3ba704c9e446e6fbafb06b42754853f4.jpg",
  price:1050
},
{
  name:"5 أعياد الميلاد",
  type:"birthday",
  img1:"https://i.pinimg.com/564x/d4/ac/84/d4ac8430d06aeff9aeede3b76572b4f2.jpg",
  img2:"https://i.pinimg.com/564x/78/a4/ae/78a4ae77559e487c853e15492911e072.jpg",
  price:3450
},
{
  name:"6 أعياد الميلاد",
  type:"birthday",
  img1:"https://i.pinimg.com/564x/13/13/c3/1313c3a8b589b24bf8b883b53729db36.jpg",
  img2:"https://i.pinimg.com/564x/ac/29/2e/ac292eb325a28711f98df0b0c503ac74.jpg",
  price:2300
},
{
  name:"7 أعياد الميلاد",
  type:"birthday",
  img1:"https://i.pinimg.com/564x/74/33/e4/7433e406144832603d86808eb7ea3e7d.jpg",
  img2:"https://i.pinimg.com/564x/74/33/e4/7433e406144832603d86808eb7ea3e7d.jpg",
  price:7600
},
    {
        name:"1 استقبال المواليد",
        type:"baby",
        img1:"https://e.top4top.io/p_2139b8tt12.png",
        img2:"https://d.top4top.io/p_2139kuse71.png",
        price:1300
    },
    {
        name:"2 استقبال المواليد",
        type:"baby",
        img1:"https://f.top4top.io/p_2139kkioq3.png",
        img2:"https://g.top4top.io/p_2139ern7h4.png",
        price:3400
    },
    {
      name:"3 استقبال المواليد",
      type:"baby",
      img1:"https://i.top4top.io/p_2139q6v336.png",
      img2:"https://h.top4top.io/p_2139q7e1i5.png",
      price:5400
  }, 
  {
    name:"4 استقبال المواليد",
    type:"baby",
    img1:"https://j.top4top.io/p_21395v1na7.png",
    img2:"https://k.top4top.io/p_2139wvh698.png",
    price:5300
},
{
  name:"5 استقبال المواليد",
  type:"baby",
  img1:"https://c.top4top.io/p_2139h6vjo1.png",
  img2:"https://d.top4top.io/p_2139j0fbs2.png",
  price:2300
},
{
  name:"6 استقبال المواليد",
  type:"baby",
  img1:"https://a.top4top.io/p_2139a6l502.png",
  img2:"https://l.top4top.io/p_2139wzl3j1.png",
  price:1200
},
{
  name:"7 استقبال المواليد",
  type:"baby",
  img1:"https://b.top4top.io/p_2139q9x053.png",
  img2:"https://c.top4top.io/p_21399x2ju4.png",
  price:5600
},
{
  name:"8 استقبال المواليد",
  type:"baby",
  img1:"https://d.top4top.io/p_2139f9snz5.png",
  img2:"https://e.top4top.io/p_2139qqdex6.png",
  price:2600
},
{
  name:"9 استقبال المواليد",
  type:"baby",
  img1:"https://f.top4top.io/p_2139rin407.png",
  img2:"https://g.top4top.io/p_2139c1tqb8.png",
  price:3400
},
  
    {
        name:"مسكه 1",
        type:"masks",
        img1:"https://i.pinimg.com/564x/1d/7a/af/1d7aaf0f0e49e6ffcda131bc0057649c.jpg",
        img2:"https://i.pinimg.com/564x/1d/7a/af/1d7aaf0f0e49e6ffcda131bc0057649c.jpg",
        price:2400
    },
    {
        name:"مسكه 2",
        type:"masks",
        img1:"https://i.pinimg.com/736x/b3/f7/1a/b3f71a49bbc46bbefec2feb45e73a515.jpg",
        img2:"https://i.pinimg.com/736x/b3/f7/1a/b3f71a49bbc46bbefec2feb45e73a515.jpg",
        price:3500
    },
    {
      name:"مسكه 3",
      type:"masks",
      img1:"https://i.pinimg.com/564x/4c/de/0e/4cde0e0c8ad4e2771b6f66c8c6e54b7c.jpg",
      img2:"https://i.pinimg.com/564x/4c/de/0e/4cde0e0c8ad4e2771b6f66c8c6e54b7c.jpg",
      price:2500
  },
  {
    name:"مسكه 4",
    type:"masks",
    img1:"https://i.pinimg.com/564x/c8/6a/9c/c86a9c7994f4e57ed8072cdfb0a8d7fa.jpg",
    img2:"https://i.pinimg.com/564x/c8/6a/9c/c86a9c7994f4e57ed8072cdfb0a8d7fa.jpg",
    price:1500
},
{
  name:"مسكه 5",
  type:"masks",
  img1:"https://i.pinimg.com/564x/f0/c6/c1/f0c6c1f3b9945de2aec171364a71e0ed.jpg",
  img2:"https://i.pinimg.com/564x/f0/c6/c1/f0c6c1f3b9945de2aec171364a71e0ed.jpg",
  price:2500
},
{
  name:"مسكه 6",
  type:"masks",
  img1:"https://i.pinimg.com/564x/1a/92/fa/1a92fa561864af16c7aa4a24efa78228.jpg",
  img2:"https://i.pinimg.com/564x/1a/92/fa/1a92fa561864af16c7aa4a24efa78228.jpg",
  price:1500
},
{
  name:"مسكه 7",
  type:"masks",
  img1:"https://i.pinimg.com/564x/58/96/d5/5896d5aa1c5c89e9c7dcfd37fe54a0e8.jpg",
  img2:"https://i.pinimg.com/564x/58/96/d5/5896d5aa1c5c89e9c7dcfd37fe54a0e8.jpg",
  price:1900
},
{
  name:"مسكه 8",
  type:"masks",
  img1:"https://i.pinimg.com/564x/ba/75/4b/ba754b8312e8e849f59b8bb747e34bf8.jpg",
  img2:"https://i.pinimg.com/564x/ba/75/4b/ba754b8312e8e849f59b8bb747e34bf8.jpg",
  price:2100
},
{
  name:"مسكه 9",
  type:"masks",
  img1:"https://i.pinimg.com/564x/dd/c6/b5/ddc6b5845e21cc9b180571c470552a0c.jpg",
  img2:"https://i.pinimg.com/564x/dd/c6/b5/ddc6b5845e21cc9b180571c470552a0c.jpg",
  price:4300
},
{
  name:"مسكه 10",
  type:"masks",
  img1:"https://i.pinimg.com/564x/3a/49/18/3a49185f6263c73b9f2014cb61e1d8cc.jpg",
  img2:"https://i.pinimg.com/564x/3a/49/18/3a49185f6263c73b9f2014cb61e1d8cc.jpg",
  price:500
},
    {
        name:"البــالية",
        type:"Ballet",
        img1:"https://test.easacc.com/noura/wp-content/uploads/2021/01/New-Project-4.png",
        img2:"https://test.easacc.com/noura/wp-content/uploads/2021/01/New-Project-4.png",
        price:8000
    },
    {
        name:"الشـرقـي",
        type:"Sharqi",
        img1:"https://test.easacc.com/noura/wp-content/uploads/2021/01/New-Project-6.png",
        img2:"https://test.easacc.com/noura/wp-content/uploads/2021/01/New-Project-6.png",
        price:6500
    },
    {
        name:"الاستعـراض",
        type:"aliastierad",
        img1:"https://test.easacc.com/noura/wp-content/uploads/2021/01/13f1bc1ac7469dfdf3ea0b2787510782.jpg",
        img2:"https://test.easacc.com/noura/wp-content/uploads/2021/01/13f1bc1ac7469dfdf3ea0b2787510782.jpg",
        price:10000
    }


],
    Favorite: [],
    Cart: [],
    Search: '',
  };
  // action -> {type: "ABC", payload: 2}
  const ItemsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
   
      case "SET_DATA":
            
        console.log("Search"+state.Search)
        return {
          Search: payload,
          Items: state.Items,
          Favorite: state.Favorite,
          Cart: state.Cart, 
        };
      case "SET_ITEMS":
        return {
          Items: [...state.Items, payload],
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

                Items: state.Items,
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
    
                    Items: state.Items,
                    Cart: state.Cart.filter((element) => {
                        return element.name !== payload.name;
                   
                    }),
                };

      default:
        return state;
    }
  };
  
  export default ItemsReducer;
  