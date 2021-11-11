import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {Cart} from "../reducers/items/actions"
import {
  Carousel,
  Button,
  Card,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import "../App.css";
import bag from "../image/bag.png";
import hart from "../image/heart.png";
import { useParams } from "react-router-dom";
import { Favorite } from "../reducers/items/actions";

function Items() {
    const {id} = useParams()
  const state = useSelector((state) => {
    return {
      item: state.ItemsReducer.Items,
      Favorites: state.ItemsReducer.Favorite,
    };
  });

  const dispatch = useDispatch();

  //const add = (element) => {

    

    //const action = Cart(element);

    //console.log("hi")

   // dispatch(action);
 // };

  function add (ele) {
    const action = Cart(ele);

    //console.log("hi")

    dispatch(action);

  }
  return (
    <div className="items-div">
      {state.item.map((element, index) => {
          if(id===element.type){

          
        return (
            
          <><Card style={{ width: "23.9rem" }}>
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
                <img className="iconSize" src={hart} onClick={() => dispatch(Favorite(element))} />
              </Card.Link>
              <Card.Link href="#">
                <img className="ImgSize" src={bag} onClick={() => dispatch(Cart(element))} />
              </Card.Link>
            </Card.Body>
          </Card></>
        );
          }
      })}
    </div>
  );
}

export default Items;
