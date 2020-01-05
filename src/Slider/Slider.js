import React, { Component } from "react";
import "./Slider.css";
import Card from "../Card/Card";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.data[0]);
    return (
      <div>
        <h1>Top Stories</h1>
        <div className='slider-container'></div>
        <button className='previous-button'>previous</button>
        <div>
          {this.props.data.map(article => (
            <Card
              image={article.urlToImage}
              title={article.title}
              description={article.description}
              key={article.title}
            />
          ))}
        </div>
        <button className='next-button'>next</button>
      </div>
    );
  }
}

export default Slider;
