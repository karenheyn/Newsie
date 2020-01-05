import React from "react";
import "./Card.css";

const img = "https://fillmurray.com/300/300";

const Card = props => {
  return (
    <div className='card-container'>
      <div>
        <img src='https://www.placecage.com/c/200/300' alt='poo'></img>
        <div className='card-overlay'>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
