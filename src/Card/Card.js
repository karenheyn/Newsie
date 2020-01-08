import React from "react";
import "./Card.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const img = "https://fillmurray.com/300/300";

const Card = props => {
  console.log(props.prublishedAt);
  return (
    <div className='card-container'>
      <div>
        <img src={props.image} alt='poo'></img>
        <div className='card-overlay'>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <a href={props.url} target='_blank' rel='noopener noreferrer'>
            view article
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
