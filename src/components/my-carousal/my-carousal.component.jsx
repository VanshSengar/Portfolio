import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./my-carousal.style.css";
import Slide1 from "../../assets/img/carousal/slide1.jpg";
import Slide2 from "../../assets/img/carousal/slide2.jpg";
import Slide3 from "../../assets/img/carousal/slide3.jpg";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={5000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* <ScrollDown /> */}
    </div>
  );
};

export { MyCarousal };

