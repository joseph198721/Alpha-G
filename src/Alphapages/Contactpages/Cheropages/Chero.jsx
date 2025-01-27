import React from "react";
import "./Chero.css";
import { GoArrowRight } from "react-icons/go";
import img from "../../../Alphaimages/Aboutp.png";

const Chero = () => {
  return (
    <div className="cont">
      <div className="cont1">
        <div className="abt">
          <GoArrowRight className="arrow1" />
          <h3>CONTACT US</h3>
        </div>
        <div className="cont2">
          <div className="get1">
            <h3>GET IN TOUCH</h3>
            <p>Our friendly team will like to hear from you</p>
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
            <button className="buno">Submit</button>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1873866012243!2d3.352758910053132!3d6.623630993342948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93302e17a15f%3A0x9adbe621c9f5203d!2sDew%20Point%20Hotel!5e0!3m2!1sen!2sng!4v1737980650289!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chero;
