import React from 'react'
import "./Jcont.css"
import imgg from "../../../Alphaimages/volun pics.png";

const Jcont = () => {
  return (
    <div className='gino1'>
      <div className='gino'>
        <div className="gin">
          <h3>JOIN US TODAY</h3>
          <p>Become a volunteer</p>
        </div>
        <div className="gun">
          <div className="gin1">
            <h5>First Name</h5>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="gin1">
            <h5>Last Name</h5>
            <input type="text" placeholder="Enter your name" />
          </div>
        </div>

        <div className="gun">
          <div className="gin1">
            <h5>Email</h5>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="gin1">
            <h5>Phone</h5>
            <input type="text" placeholder="Enter your phone" />
          </div>
        </div>

        <div className="gun">
          <div className="gin1">
            <h5>Event Location</h5>
            <input type="text" placeholder="Enter your location" />
          </div>
          <div className="gin1">
            <h5>City</h5>
            <input type="text" placeholder="Enter your city" />
          </div>
        </div>

        <div className="gun">
          <div className="gin1">
            <h5>State/Province</h5>
            <input type="text" placeholder="Enter your state" />
          </div>
          <div className="gin1">
            <h5>Source of discovery</h5>
            <select className='sour'>
                <option value="facebook">Facebook</option>
                <option value="facebook">Facebook</option>
                <option value="facebook">Facebook</option>
                <option value="facebook">Facebook</option>
                <option value="facebook">Facebook</option>
                <option value="facebook">Facebook</option>
            </select>
          </div>
        </div>
        <div className="gou">
          <h5>Company/Organization</h5>
          <input type="text" placeholder="Enter your company" />
        </div>
        <div className="mess">
          <h5>Message</h5>
          <textarea name="" id=""></textarea>
        </div>
        <div className="boss">
          <input type="checkbox" />
          <h5>You agree with our terms and condition policy</h5>
        </div>
        <button className="buno1">Submit</button>
      </div>

      <div className="bunnn">
        <img src={imgg} alt="" />
      </div>
    </div>
  );
}

export default Jcont
