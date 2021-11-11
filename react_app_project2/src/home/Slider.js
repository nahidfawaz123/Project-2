import React from 'react'
import '../style.css'
// import '../App.css'
import {Carousel ,Button } from 'react-bootstrap';
import img1 from '../image/image1.jpg'
import img2 from '../image/image2.jpg'
import img3 from '../image/image3.jpg'


function Slider() {
    return (
        <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 imgslider"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <div className="d-block text-dark blockSlider">
        <p>متخصصون في تنسيق <br/>مناسباتكم و حفلاتكم <br/>,ايضا مهتمين بتنسيق <br/>المعارض والمؤتمرات</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 imgslider"
        src={img2}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 imgslider"
        src={img3}
          alt="Third slide"
      />
  
      <Carousel.Caption>
  
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    )
}

export default Slider
