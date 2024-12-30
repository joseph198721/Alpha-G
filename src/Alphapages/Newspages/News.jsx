import React from 'react'
import "./News.css"
import img from "../../Alphaimages/2149141935 DS.png"
import { GrFormSchedule } from "react-icons/gr";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { PiLineVerticalThin } from "react-icons/pi";


const News = () => {
  return (
    <div>
      <div className="new1">
        <h3>OUR LASTEST NEWS</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          perspiciatis beatae pariatur{" "}
        </p>
      </div>
      <div className="latest-row">
        <div className="newp">
          <img src={img} alt="" />

          <div className="new4">
            <div className="new2">
              <GrFormSchedule />
              <h5>20th Oct 2024 </h5>
            </div>

            <div className="new3">
              <PiLineVerticalThin />
              <BsFillPersonVcardFill />
              <h4>Galleon</h4>
            </div>
          </div>

          <div className="new5">
            <h4>World Malaria Day</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing <br />
              elit. Facere consectetur eos quas aliquid corrupti, <br />
              itaque nostrum non in ipsa voluptatibus aspernatur <br />{" "}
              voluptate harum repellat hic recusandae eum possimus.
            </p>
            <button className="butt1">Read more</button>
          </div>
        </div>
        <div className="newp">
          <img src={img} alt="" />

          <div className="new4">
            <div className="new2">
              <GrFormSchedule />
              <h5>20th Oct 2024 </h5>
            </div>

            <div className="new3">
              <PiLineVerticalThin />
              <BsFillPersonVcardFill />
              <h4>Galleon</h4>
            </div>
          </div>

          <div className="new5">
            <h4>World Malaria Day</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing <br />
              elit. Facere consectetur eos quas aliquid corrupti, <br />
              itaque nostrum non in ipsa voluptatibus aspernatur <br />{" "}
              voluptate harum repellat hic recusandae eum possimus.
            </p>
            <button className="butt1">Read more</button>
          </div>
        </div>
        <div className="newp">
          <img src={img} alt="" />

          <div className="new4">
            <div className="new2">
              <GrFormSchedule />
              <h5>20th Oct 2024 </h5>
            </div>

            <div className="new3">
              <PiLineVerticalThin />
              <BsFillPersonVcardFill />
              <h4>Galleon</h4>
            </div>
          </div>

          <div className="new5">
            <h4>World Malaria Day</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing <br />
              elit. Facere consectetur eos quas aliquid corrupti, <br />
              itaque nostrum non in ipsa voluptatibus aspernatur <br />{" "}
              voluptate harum repellat hic recusandae eum possimus.
            </p>
            <button className="butt1">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News
