import React, { Component } from "react";
import "./Slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Top Stories</h1>
        <div className='slider-container'></div>
        <div className='previous-button'>!</div>
        <div> Content</div>
        <div classname='next-button'>!</div>
      </div>
    );
  }
}

export default Slider;
