import React from 'react'
import "./Project.css"
import { GoArrowRight } from "react-icons/go";
import img1 from "../../../Alphaimages/School kids.png"
import img2 from "../../../Alphaimages/diseases.png"
import img3 from "../../../Alphaimages/environment.png"
import img4 from "../../../Alphaimages/peace.png"
import img5 from "../../../Alphaimages/good water.png"
import img6 from "../../../Alphaimages/mother nd child.png"




const Project = () => {
  return (
    <div className="pro2">
      <div className="pro1">
        <GoArrowRight className="arrow" />
        <h3>OUR PROJECT</h3>
      </div>
      <div className="pros">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='picsh1'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className='picsh2'>
       <img src={img4} alt="" />
       <img src={img5} alt="" />
       <img src={img6} alt="" />


      </div>
      
    </div>
  );
}

export default Project
