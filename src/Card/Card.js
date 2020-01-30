import React, { useState } from "react";
import "./Card.css";
import ReactDOM from "react-dom";

const img = "https://fillmurray.com/300/300";

const Card = props => {
  console.log(props.url);
  const [hovered, setHovered] = useState(false);
  const hover = () => setHovered(!hovered);
  return (
    <div className='card-container'>
      <div>
        <img src={props.image} alt='poo'></img>
        <div className='card-overlay'>
          <h3>{props.title}</h3>
          <p>{props.description}</p>

          <a
            onMouseEnter={hover}
            onMouseLeave={hover}
            className={hovered ? "active" : null}
            href={props.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            view article
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
