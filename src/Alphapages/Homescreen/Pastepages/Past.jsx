import React from 'react'
import "./Past.css"
import img1 from "../../../Alphaimages/gall1.png" 
import img2 from "../../../Alphaimages/gall2.png"; 
import img3 from "../../../Alphaimages/gall3.png"; 
import img4 from "../../../Alphaimages/gall4.png";
import img5 from "../../../Alphaimages/gall5.png"; 
import { GoArrowRight } from "react-icons/go";







const Past = () => {
  return (
    <div>
      <div className="past1">
        <GoArrowRight className="arrow" />
        <h3>PAST EVENT</h3>
      </div>
      <div className="pastt">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="past2">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>
    </div>
  );
}

export default Past
