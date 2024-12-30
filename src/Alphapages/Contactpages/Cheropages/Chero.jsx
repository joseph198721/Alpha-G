import React from "react";
import "./Chero.css";
import { GoArrowRight } from "react-icons/go";
import img from "../../../Alphaimages/Aboutp.png";

const Chero = () => {
  return (
    <div>
      <div className="abt1">
        <img src={img} alt="" />
      </div>
      <div className="get1">
        <h3>GET IN TOUCH</h3>
        <p>Our friendly team will like to hear from you</p>
      </div>
      <div className="fory">
        <div className="for1">
          <h5>First Name</h5>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="for1">
          <h5>Last Name</h5>
          <input type="text" placeholder="Enter your name" />
        </div>
      </div>
      <div className="fory">
        <div className="for1">
          <h5>Email</h5>
          <input type="text" placeholder="Enter your phone" />
        </div>
        <div className="for1">
          <h5>Phone</h5>
          <input type="text" placeholder="Enter your number" />
        </div>
      </div>
      <div className="mes">
        <h5>Message</h5>
        <textarea name="" id=""></textarea>
      </div>
      <div className="bos">
        <input type="checkbox" />
        <h5>You agree with our terms and condition policy</h5>
      </div>
      <button className="bun">Submit</button>
      
    </div>
  );
};

export default Chero;
