import React, {useRef} from 'react'
import "./Slider.css"
import "./Hero.css"
import Slider from 'react-slick'
import hip1 from "../../../Alphaimages/2149203611.jpg"
import hip2 from "../../../Alphaimages/2149452704.jpg"
import hips3 from "../../../Alphaimages/2150763397.jpg"


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const mainSliderRef = useRef(null); // Reference to the main slider
const slides = [
  { id: 1, image: hip1 },
  { id: 2, image: hip2 },
  { id: 3, image: hips3 },
  
];


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {slides.map((slide) => (
    
          <div className="slide-container" key={slide.id}>
            <img src={slide.image} className="main-image" alt="Slide" />
            <div className="text-overlay">
              <h1>
                WELCOME TO <span>ALPHA</span> GALLEON
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia repudiandae, quidem ipsa suscipit ex excepturi quaerat
                impedit. Quo, labore ipsum.
              </p>
              <button className="over">Make a Donation</button>
            </div>
          </div>
        
      ))}
    </Slider>
  );
}

