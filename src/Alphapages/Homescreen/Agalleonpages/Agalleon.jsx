import React from 'react'
import "./Agalleon.css"
import img from "../../../Alphaimages/masked pics about.png"


const Agalleon = () => {
  return (
    <div className="galleon1">
      <div className="picsholder">
        <img src={img} alt="" />
      </div>
      <div className="gall1">
        <h3>
          ABOUT <span>ALPHA</span> GALLEON
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam
          voluptatum ipsam laborum, id non aut harum rem delectus error
          quibusdam dicta veniam sunt minus nihil? Eos dolores aliquid
          laboriosam. Recusandae at necessitatibus ullam nemo soluta reiciendis
          totam, iusto dolorum aspernatur vitae voluptatum, quia enim, earum
          debitis sed vel nulla?
        </p>
        <button className='gabb1'>Read More</button>
      </div>
    </div>
  );
}

export default Agalleon
