import React from "react";
import { Carousel, Button } from "react-bootstrap";
import bag from "../image/bag.png"

// import '../style.css'
import '../App.css'
function Service() {
  return (
    
    <div className="service">
     
      {/* ------------------------------------ One------------------------------------------------ */}

      <div className="card">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100 "
              src="https://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.04.01-AM-300x300.jpeg"
              alt="قدر"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.05.27-AM-300x300.jpeg"
              alt="قدر"
            />
          </Carousel.Item>
        </Carousel>
        <h6>تقديمات قدر </h6>
      </div>

      {/* ------------------------------------Tow------------------------------------------------ */}

      <div className="card">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.04.20-AM.jpeg"
              alt="الرحى"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 h-75"
              src="http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.06.12-AM-1-300x300.jpeg"
              alt="الرحى"
            />
          </Carousel.Item>
        </Carousel>
        <h6>تقديمات الرحى </h6>
      </div>

      {/* ------------------------------------ Three------------------------------------------------ */}

      <div className="card">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100 "
              src="https://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.17.49-AM-300x300.jpeg"
              alt="لاديم"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.18.28-AM-300x300.jpeg"
              alt="لاديم"
            />
          </Carousel.Item>
        </Carousel>

        <h6>تقديمات لاديم </h6>
      </div>
      {/* ------------------------------------ Four------------------------------------------------ */}

      <div className="card">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.14.43-AM-300x300.jpeg"
              alt="أرتال"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 h-75"
              src="http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.15.48-AM-300x300.jpeg"
              alt="أرتال"
            />
          </Carousel.Item>
        </Carousel>

        <h6>تقديمات أرتال </h6>
        <img className="ImgSize" src={bag}/>
      </div>
      {/* ---------------------------------------Five ----------------------------------------------- */}

      <div className="card">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100 "
              src="http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.04.12-AM-300x300.jpeg"
              alt="دولمه"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://test.easacc.com/noura/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-02-at-2.04.32-AM-300x300.jpeg"
              alt="دولمة"
            />
          </Carousel.Item>
        </Carousel>
        <h6>تقديمات دولمة </h6>
      </div>
    </div>
  );
}

export default Service;
