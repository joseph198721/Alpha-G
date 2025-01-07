import React from 'react'
import "./Gcont.css"

import img1 from "../../../Alphaimages/gall1.png";
import img2 from "../../../Alphaimages/gall2.png";
import img3 from "../../../Alphaimages/gall3.png";
import img4 from "../../../Alphaimages/gall4.png";

const Gcont = () => {
  return (
    <div>
      <div className="gallery-low">
        <div className="lery2">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        <div className="lery2">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        <div className="lery2">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        <div className="lery2">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gcont
