import { useDispatch, useSelector } from "react-redux";
function ShoppingCart() {
  const state = useSelector((state) => {
    return {
      cart: state.ItemsReducer.Cart,
    };
  });
    return (
      <div >
       

        
       <div className="card">
    <div className="row">
        <div className="col-md-8 cart">
            <div className="title">
                <div className="row">
                    <div className="col">
                        <h4><b>Shopping Cart</b></h4>
                    </div>
                    <div className="col align-self-center text-right text-muted">3 items</div>
                </div>
            </div>
            <div className="row border-top border-bottom">
                <div className="row main align-items-center">
                    <div className="col-2"><img class="img-fluid" src="https://i.imgur.com/1GrakTl.jpg"/></div>
                    <div className="col">
                        <div className="row text-muted">Shirt</div>
                        <div className="row">Cotton T-shirt</div>
                    </div>
                    <div className="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                </div>
            </div>
            <div className="back-to-shop"><a href="#">&leftarrow;</a><span class="text-muted">Back to shop</span></div>
        </div>
        <div className="col-md-4 summary">
            <div>
                <h5><b>Summary</b></h5>
            </div>
            <hr/>
            <div className="row">
                <div className="col" >ITEMS 3</div>
                <div className="col text-right">&euro; 132.00</div>
            </div>
            <form>
                <p>SHIPPING</p> <select>
                    <option className="text-muted">Standard-Delivery- &euro;5.00</option>
                </select>
                <p>GIVE CODE</p> <input id="code" placeholder="Enter your code"/>
            </form>
            <div className="row">
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">&euro; 137.00</div>
            </div> <button className="btn">CHECKOUT</button>
        </div>
    </div>
</div>
      </div>
    );
  }
  
  export default ShoppingCart;