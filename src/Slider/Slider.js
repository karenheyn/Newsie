import React, { Component } from "react";
import "./Slider.css";
import Card from "../Card/Card";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles: this.props.data,
      currentIndex: this.props.data[0]
    };
    this.nextArticle = this.nextArticle.bind(this);
    this.prevArticle = this.prevArticle.bind(this);
  }
  nextArticle = () => {
    let newIndex = this.state.currentIndex.index + 1;
    this.setState({ currentIndex: this.props[newIndex] });
  };
  prevArticle = () => {
    let newIndex = this.state.currentIndex.index - 1;
    this.setState({ currentIndex: this.props[newIndex] });
  };
  render() {
    const article = this.state.currentIndex;
    console.log(this.state.currentIndex);
    if (this.state.allArticles.length > 0) {
      console.log(this.state.currentIndex.index);
    }
    return (
      <div>
        <h1>Top Stories</h1>
        <div className='slider-container'></div>
        <button className='previous-button' onClick={this.prevArticle}>
          previous
        </button>
        <div>
          <Card data={article} />
          {/* {this.state.allArticles.length > 0 ? (
            <Card
              image={this.state.currentIndex.urlToImage}
              title={this.state.currentIndex.title}
              description={this.state.currentIndex.description}
              key={this.state.currentIndex.title}
            />
          ) : null} */}
          {/* {this.props.data.map(article => (
            <Card
              image={article.urlToImage}
              title={article.title}
              description={article.description}
              key={article.title}
            />
          ))} */}
        </div>
        <button className='next-button' onClick={this.nextArticle}>
          next
        </button>
      </div>
    );
  }
}

export default Slider;
