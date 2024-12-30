import React from "react";
import Hero from "./Heropages/Hero";
import Stat from "./Statpages/Stat";
import Agalleon from "./Agalleonpages/Agalleon";
import Partners from "./Partnerspages/Partners";
import Project from "./Projectpages/Project";
import Upcoming from "../Upcomingpages/Upcoming";
import Gallery from "./Gallerypages/Gallery";
import Past from "./Pastepages/Past";
import Volunter from "../Headerpages/Volunterpages/Volunter";
import News from "../Newspages/News";


const Homescreen = () => {
  return (
    <div>
      <Hero />
      <Stat/>
      <Agalleon/>
      <Partners/>
      <Project/>
      <Upcoming/>
      <Gallery/>
      <Past/>
      <Volunter/>
      <News/>
    </div>
  );
};

export default Homescreen;
