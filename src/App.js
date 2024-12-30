import Hero from "./Alphapages/Homescreen/Heropages/Hero";
import Header from "./Alphapages/Headerpages/Header";
import Homescreen from "./Alphapages/Homescreen/Homescreen";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Alphapages/Footerpages/Footer";
import Abtscree from "./Alphapages/Aboutpages/Abtscree/Abtscree";
import Upeventscreen from "./Alphapages/Upeventpages/Upeventscreen/Upeventscreen";
import Upcoming from "./Alphapages/Upcomingpages/Upcoming";
import Contactscreen from "./Alphapages/Contactpages/Contactscreen/Contactscreen";




function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/About" element={<Abtscree />} />
        <Route path="/Upcoming" element={<Upeventscreen />} />
        <Route path="/Contact" element={<Contactscreen />} />
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
