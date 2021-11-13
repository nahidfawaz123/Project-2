import React from "react";
import {useSelector , useDispatch } from "react-redux";
import bag from "../image/bag.png";
import hart from "../image/heart.png";
import "../style.css";
import {
  Card,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import  {deleteFavorite ,Cart} from '../reducers/items/actions'
import { Carousel, Button } from "react-bootstrap";
import {  useNavigate } from "react-router"

function Favorite() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const state = useSelector((state) => {
    console.log(state);
    return {
     Favorite: state.ItemsReducer.Favorite
    };
  });
console.log(state.Favorite);
    return (
      <><div>

        <br />
        <h1> قائمة بالمفضلة</h1>
      </div><div className="items-div">

          {state.Favorite.map((element) => {
            return (
              <><Card style={{ width: "23.9rem" }}>
                <div className="container">
                  <Card.Img variant="top" src={element.img1} className="item-image image" />
                  <div className="overlay">
                    <div className="secandImage">
                      <img src={element.img2} alt="Avatar" class="image" />
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                </Card.Body><ListGroup className="list-group-flush">
                  <ListGroupItem>{element.price} :السعر</ListGroupItem>
                </ListGroup><Card.Body>
                  <Card.Link href="#">
                    <img className="iconSize" src={hart} onClick={() => dispatch(deleteFavorite(element))} />
                  </Card.Link>
                  <Card.Link href="#">
                    <img className="ImgSize" src={bag} onClick={() =>  dispatch(Cart(element))} />
                  </Card.Link>
                </Card.Body>
              </Card></>
            );

          })}
        </div></>
  );
  }
  
  export default Favorite;