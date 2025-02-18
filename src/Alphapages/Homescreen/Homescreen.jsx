import React from "react";
import Hero from "./Heropages/Hero";
import SimpleSlider from "./Heropages/Slider";
import Stat from "./Statpages/Stat";
import Agalleon from "./Agalleonpages/Agalleon";
import Partners from "./Partnerspages/Partners";
import AutoPlay from "./Partnerspages/Pslide";
import Project from "./Projectpages/Project";
import Upcoming from "../Upcomingpages/Upcoming";
import Gallery from "./Gallerypages/Gallery";
import Past from "./Pastepages/Past";
import Volunter from "./Volunterpages/Volunter";
import News from "../Newspages/News";



const Homescreen = () => {
  return (
    <div>
      <Hero />
      <SimpleSlider/>
      <Stat/>
      <Agalleon/>
      <Partners/>
      <AutoPlay/>
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
