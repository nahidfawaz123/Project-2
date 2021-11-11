import React from "react";
import { Carousel, Button } from "react-bootstrap";
import bag from "../image/bag.png";
import hart from "../image/heart.png";
import "../App.css";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Favorite,Cart } from "../reducers/items/actions";
function Service() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      Favorites: state.ItemsReducer.Favorite,
      items: state.ItemsReducer.Items,

    };
  });


  return (
    <div className="service">
      {state.items.map((element) => {
        if (element.type==='dinner'){
        return (
          <div>
            <div className="card">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="imageService "
                    src={element.img1}
                    alt={element.name}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="imageService"
                    src={element.img2}
                    alt={element.name}
                  />
                </Carousel.Item>
              </Carousel>
              <div className="type">
                <h4>{element.name} </h4>
              </div>
              <div>
                <h4>{element.price} SR </h4>
                <hr/>
              </div>
              <div className="iconGrid">
                <img className="iconSize" src={hart} onClick={()=>dispatch(Favorite(element))} />
                <img className="ImgSize" src={bag}  onClick={()=>dispatch(Cart(element))} />
              </div>
            </div>

          </div>
        );
      }})}
    </div>
  );
}
export default Service;
