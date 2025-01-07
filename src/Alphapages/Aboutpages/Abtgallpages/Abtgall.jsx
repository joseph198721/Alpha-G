import React from 'react'
import "./Abtgall.css"
import img1 from "../../../Alphaimages/ABT MASKED.png"
import img2 from "../../../Alphaimages/ABT MASKED2.png"

const Abtgall = () => {
  return (
    <div className="abtr">
      <div className="abt1">
        <img src={img1} className="ab" alt="" />
        <img src={img2} className="ab2" alt="" />
      </div>
      <div className="abt2">
        <h3>
          ABOUT <span>ALPHA </span> GALLEON
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quia vitae harum quis commodi quibusdam eaque incidunt eligendi, iste
          ipsa neque laudantium voluptates, eius nesciunt, ipsam aperiam
          accusantium nobis! Debitis repellat fugit, veniam dolorem amet optio
          velit adipisci aspernatur alias quos explicabo asperiores pariatur,
          molestiae aut. Et aperiam numquam vero?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quia vitae harum quis commodi quibusdam eaque incidunt eligendi, iste
          ipsa neque laudantium voluptates, eius nesciunt, ipsam aperiam
          accusantium nobis! Debitis repellat fugit, veniam dolorem amet optio
          velit adipisci aspernatur alias quos explicabo asperiores pariatur,
          molestiae aut. Et aperiam numquam vero?
        </p>
        <button className="bun2">Read more</button>
      </div>
    </div>
  );
}

export default Abtgall
