import React from "react";
import "./Header.css";
import img from "../../Alphaimages/Alphalogo1.png";



const Header = () => {
  return (
    <div className="logo1">
      <img src={img} alt="" />
      <div className="navbar">
        <a href="/">HOME</a>
        <a href="/About">ABOUT US</a>
        <a href="/Upcoming">UPCOMING EVENT</a>
        <a href="/Project">OUR PROJECT</a>
        <a href="">BLOG</a>
        <a href="/Contact">CONTACT US</a>
      </div>
    
    </div>
  );
};

export default Header;
