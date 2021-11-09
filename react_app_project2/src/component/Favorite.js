import React from "react";
import {useSelector , useDispatch } from "react-redux";
import bag from "../image/bag.png";
import hart from "../image/heart.png";
import "../style.css";
import  {deleteFavorite} from '../reducers/items/actions'
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
      </div>
      <div className="service">

          {state.Favorite.map((element) => {
            return (
              <div>
                <div className="card">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 h-100 "
                        src={element.img1}
                        alt={element.name} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={element.img2}
                        alt={element.name} />
                    </Carousel.Item>
                  </Carousel>
                  <div className="type">
                    <h4>{element.name} </h4>
                  </div>
                  <div className="iconGrid">
                    <img className="iconSize" src={hart} onClick={() => dispatch(deleteFavorite(element))} />
                    
                  </div>
                </div>

              </div>
            );
          })}
        </div></>
  );
  }
  
  export default Favorite;