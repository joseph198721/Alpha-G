import React from "react";
import Slider from "react-slick";

import "./Partners.css"
import satt1 from "../../../Alphaimages/logo glo.png"
import satt2 from "../../../Alphaimages/alpha logo.png"
import satt3 from "../../../Alphaimages/mtn-logo 5.png"
import satt4 from "../../../Alphaimages/Alphalogo1.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide
= [
    {id: 1, image : satt1},
    {id: 2, image : satt2},
    {id: 3, image : satt3},
    {id: 4, image : satt4},

];






function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      {Slide.map((slide) => (
        <div className="slider-container2" key={slide.id}>
          <img
            src={slide.image}
            className="main-pics"
            alt={`Slide ${slide.id}`}
          />
        </div>
      ))}
    </Slider>
  );
}

export default AutoPlay;
