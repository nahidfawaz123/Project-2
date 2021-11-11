import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from 'react';
import {deleteCart,getOrder, getprice} from "../reducers/items/actions"
import Button from 'react-bootstrap/Button';
function ShoppingCart() {
  const [total1,setTotal1] = useState(0)
  const [select,setSelect] = useState()
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return {
      cart: state.ItemsReducer.Cart,
      order:state.ItemsReducer.Order,
      total:state.ItemsReducer.total
    };
  });
  const dispatch = useDispatch();

  let total = 0;
  //setTotal1(total)
  let input1=""
  let input2
  function selectOnChange (e){
    input2=e.target.value
    console.log(input2);
  }
  function selectOnClick (){
    //total = total + parseInt(input2)
    //let selectV = total + parseInt(input2)
     setTotal1(total1+parseInt(input2))
     console.log(state.order);
  }
  function InputChangeC(e){
    
    
    input1= e.target.value;
    console.log(input1);
 }

 function onclickInput(){
   if(input1==="free" && total1 !== 0){
     
     
     if(total1<0){
       alert("cant use it total will be less than 0 ")
     }
     else{
      //total=total-50
     //setTotal1(total)
     console.log(total);
      setTotal1(total1-50)
     }
   }
   else if(total1 == 0 ){
     alert("can't use it total = 0")
   }
   else{
     alert("wrong coupon")
   }
 }
 function order(y){
  const action = getOrder(y);
  state.total=total1
  console.log(state.order);
  console.log(state.cart);
  
  dispatch(action)
  return navigate("/Orders")
 }
 function remove  (x,t) {
  //setCounter(counter + 1);

  
  setTotal1(t-x.price)
  const action = deleteCart(x);

  // {
  //   type: "ADD_USER",
  //   payload: {
  //     id: 2,
  //     name: "Jane"
  //   },
  // }
  dispatch(action);
   return 
};

 
  useEffect (()=>{
    setTotal1(total)
  },[])
    return (
      <div>
          
        
            
       <div className="cart_section">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="cart_container">
                    <div className="cart_title">Shopping Cart</div>
                    {state.cart.map((element, index) => {
                      
          
          return (
                        <div>
                    <div className="cart_items">
                        <ul className="cart_list">
                            <li className="cart_item clearfix">
                                <div className="cart_item_image"><img src={element.img1} alt=""/></div>
                                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                    <div className="cart_item_name cart_info_col">
                                        <div className="cart_item_title">Name</div>
                                        <div className="cart_item_text">{element.name}</div>
                                    </div>
                                    <div className="cart_item_quantity cart_info_col">
                                        <div className="cart_item_title">Remove from Cart</div>
                                        <div className="cart_item_text"><Button  variant="danger" onClick={()=>remove(element,total)}>X</Button ></div>
                                        
                                    </div>
                                    <div className="cart_item_price cart_info_col">
                                        <div className="cart_item_title">Price</div>
                                        <div className="cart_item_text">{element.price}</div>
                                    </div>
                                    <div className="cart_item_total cart_info_col">
                                        <div className="cart_item_title">Total</div>
                                        <div className="cart_item_text">{total=total+element.price}</div>
                                        
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    
                    </div>
                    );
      
                    })}
                  <div className="order_total">
                        <div className="order_total_content text-md-right">
                            <div className="order_total_title"><input className="input-coupons" type="text" placeholder="discount coupons" onChange={InputChangeC}/></div>
                            <div className="order_total_title"><input className="submit-coupons" type="submit" id="buttDiscount" onClick={onclickInput}/></div>
                        </div>

                        <div className="order_total">
                        <div className="order_total_content text-md-right">
                            <div className="order_total_title"> <form>
                           <label>Delivery Options:</label>
                          <select id="selcetedOption" value={select} onChange={selectOnChange}> 
                          <option id="op1" value="20" selected>Standard Shipping - 20 SAR</option>
                          <option id="op2" value="50">Priority Shipping - 50 SAR</option>
                          <option id="op3" value="100">Express Shipping - 100 SAR</option>
                              </select>
                                       </form></div>
                            <div className="order_total_amount"> <input  type="submit" className="submit-coupons" onClick={selectOnClick}/></div>
                        </div>
                        
                        </div>
                        
                        <div className="order_total">
                        <div className="order_total_content text-md-right">
                            <div className="order_total_title">Order Total:</div>
                            <div className="order_total_amount">{total1}</div>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="cart_buttons"> <button type="button" className="button cart_button_checkout" onClick={()=>order(state.cart)}>Confirm Order</button> </div>
</div>
        

      </div>
    );
  }
  
  export default ShoppingCart;