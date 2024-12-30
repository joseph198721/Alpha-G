import React from 'react'
import "./Footer.css"
import img from "../../Alphaimages/Alphalogo1.png"
import img1 from "../../Alphaimages/facebook.png"
import img2 from "../../Alphaimages/instagram.png"
import img3 from "../../Alphaimages/linkedin.png"
import img4 from "../../Alphaimages/whatsapp.png"
import cpy from "../../Alphaimages/copyright.png"

const Footer = () => {
  return (
    <div className='foot'>
      <div className="foo1">
        <h1>Subscribe To Our Newsletter</h1>
      </div>
      <div className="foo2">
        <input type="text" placeholder="Email" />
        <button className="foo">Submit</button>
      </div>
      <div>
        <hr className="lin1" />
        <div className="logo">
          <img src={img} alt="" />
          <div className="navbar1">
            <a href="">HOME</a>
            <a href="">ABOUT US</a>
            <a href="">PROJECTS</a>
            <a href="">BLOG</a>
            <a href="">OUR EXCOS</a>
          </div>
          <div className="icons">
            <a href="">
              <img src={img1} alt="" />
            </a>
            <a href="">
              <img src={img2} alt="" />
            </a>
            <a href="">
              <img src={img3} alt="" />
            </a>
            <a href="">
              <img src={img4} alt="" />
            </a>
          </div>
        </div>
        <hr className="lin1" />
        <div className='copy'>
            <img src={cpy} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer

