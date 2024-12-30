import React from "react";
import "./Partners.css";
import { GoArrowRight } from "react-icons/go";
import img from "../../../Alphaimages/logo sponsors.png"


const Partners = () => {
  return (
    <div className="spons2">
      <div className="spons1">
        <GoArrowRight className="arrow" />
        <h3>OUR PARTNERS AND SPONSORS</h3>
      </div>
      <div className="spons">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="sponj">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Partners;
