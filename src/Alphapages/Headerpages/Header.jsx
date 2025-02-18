import React, { useState } from "react";
import "./Header.css";
import img from "../../Alphaimages/Alphalogo1.png";
import { CiMenuBurger } from "react-icons/ci";





const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const links = [
    {
      route: "/",
      name: "HOME",
    },
    {
      route: "/About",
      name: "ABOUT US",
    },
    {
      route: "/Upcoming",
      name: "UPCOMING EVENT",
    },
    {
      route: "/Project",
      name: "OUR PROJECT",
    },
    {
      route: "/Contact",
      name: "CONTACT US",
    },
  ];

  return (
    <div className="logo1 fixed-top">
      <img src={img} alt="" />
      <div className="navbar ">
        {links.map((link) => (
          <a href={link.route}>{link.name}</a>
        ))}
      </div>
      <div className="dcon" onClick={() => setOpen(!isOpen)}>
        <CiMenuBurger />
      </div>
      {isOpen ? (
        <div className="sidebar">
          {links.map((link) => (
            <a className="sidebar-link" href={link.route}>
              {link.name}
            </a>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
