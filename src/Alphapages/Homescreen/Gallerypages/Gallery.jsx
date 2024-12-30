import React from 'react'
import "./Gallery.css"
import { GoArrowRight } from "react-icons/go";
import img1 from "../../../Alphaimages/gall1.png"
import img2 from "../../../Alphaimages/gall2.png"
import img3 from "../../../Alphaimages/gall3.png"
import img4 from "../../../Alphaimages/gall4.png"

const Gallery = () => {
  return (
    <div className="lery">
      <div className="gallery-icon">
      <GoArrowRight className="arrow" />
      <h3>OUR GALLERY </h3>
      </div>

      <div className="gallery-row">
            <div className="lery1">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
            <div className="lery1">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
      </div>
    </div>
  );
}

export default Gallery
