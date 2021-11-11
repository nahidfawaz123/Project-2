import React from "react";
import { useSelector, useDispatch } from "react-redux";
import bag from "../image/bag.png";
import hart from "../image/heart.png";
import "../App.css";
import {
  Carousel,
  Button,
  Card,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import { Favorite , Cart} from "../reducers/items/actions";
function Search() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      items: state.ItemsReducer.Items,
      search: state.ItemsReducer.Search,
      Favorites: state.ItemsReducer.Favorite,
    };
  });
  return (
    <>
     <div className="items-div">
      {state.items
        .filter((ele) => {
          if (state.search == "") {
            return ele;
          } else if (
            ele.name.includes(state.search) ||
            ele.type.includes(state.search)
          ) {
            return ele;
          }
        })
        .map((element, index) => {
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
        })}
        </div>
    </>
  );
}

export default Search;
