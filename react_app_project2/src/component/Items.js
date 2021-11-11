import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {Cart,getprice} from "../reducers/items/actions"
import {
  Carousel,
  Button,
  Card,
  ListGroupItem,
  ListGroup,
  Dropdown,
  Form,
} from "react-bootstrap";
import "../App.css";
import bag from "../image/bag.png";
import hart from "../image/heart.png";
import downArrow  from "../image/downArrow.png";
import { useParams } from "react-router-dom";
import { Favorite } from "../reducers/items/actions";

function Items() {
  const [select,setSelect] = useState()
  const [noOfElement,setNoOfElement] = useState(8);
    const {id} = useParams()
  const state = useSelector((state) => {
    return {
      item: state.ItemsReducer.Items,
      Favorites: state.ItemsReducer.Favorite,
      price:state.ItemsReducer.Price,
    };
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const slice = state.item.slice(0,noOfElement)

  let input2
  function selectOnChange (e){
    input2 = e.target.value
    setSelect(input2)
    
    //console.log(select);
    
    //navigate("/priceOption")
  }

  const buttonPrice = () =>{
    dispatch(getprice(select))
    navigate("/priceOption")
  }
  //function add (ele) {
   // const action = Cart(ele);
   // dispatch(action);

  //}
  const loadmore = ()=>{
    setNoOfElement(noOfElement +noOfElement)
  }
  useEffect(()=>{
    loadmore()
  },[])
  return (
    
    <div>

          <form>
           <label>Price Options:</label><br/>
          <select id="selcetedOption" value={select} onChange={selectOnChange}> 
           <option id="op1" value="0" selected>...</option>
          <option id="op2" value="100"> 100 SAR</option>
          <option id="op3" value="500">500 SAR</option>
         <option id="op4" value="2400">2400 SAR</option>
                             </select>
        <button onClick={buttonPrice}>Apply</button>
        </form> 

      <div className="items-div">
      {slice.map((element, index) => {
          if(id===element.type){
        return (
            <div>
           <Card style={{ width: "23.9rem" }}>
            <div className="container">
              <Card.Img variant="top" src={element.img1} className="item-image image" />
              <div className="overlay">
                <div className="secandImage">
                  <img src={element.img2} alt="Avatar" class="image"/>
                </div>
              </div>
            </div>
          <Card.Body>
              <Card.Title>{element.name}</Card.Title>
            </Card.Body><ListGroup className="list-group-flush">
              <ListGroupItem>{element.price} :السعر</ListGroupItem>
            </ListGroup><Card.Body>
              <Card.Link href="#">
                <img className="iconSize" src={hart} onClick={() => dispatch(Favorite(element))}/>
              </Card.Link>
              <Card.Link href="#">
                <img className="ImgSize" src={bag} onClick={() => dispatch(Cart(element))} />
              </Card.Link>
            </Card.Body>
          </Card>
          </div>
        );
          }
      })}
      <div className="buttonLoad">
      <img className="ImgSize" src={downArrow} onClick={()=>loadmore()}/>
      {/* <Button  className="btn btn-dark d-block w-100"  onClick={ ()=> loadmore()} > load morePrimary</Button>{' '}  */}
      </div>
    </div>
    </div>
    
  );
}

export default Items;
