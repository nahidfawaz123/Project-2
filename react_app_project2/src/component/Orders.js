import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from 'react';
function Orders(){
    let total = 0
    const state = useSelector((state) => {
        return {
          cart: state.ItemsReducer.Cart,
          order:state.ItemsReducer.Order,
          total:state.ItemsReducer.total
        };
      });
      let orderNum = Math.floor(Math.random() * 1000) + 100;
      console.log(state.order);
      
    
    return (
        <div>

        <h3>Order Number:{orderNum}</h3>
      <h3>Order Total:{state.total}</h3>
        </div>
    )
}
export default Orders