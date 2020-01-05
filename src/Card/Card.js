import React from "react";
import "./Card.css";

const img = "https://fillmurray.com/200/300";

const Card = props => {
  return (
    <div className='card-container'>
      <div>
        <img src={img} alt='poo'></img>
      </div>
    </div>
  );
};

export default Card;
