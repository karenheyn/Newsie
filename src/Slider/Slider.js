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
  }
  nextArticle = () => {
    let newIndex = this.state.currentIndex.index + 1;
    this.setState({ currentIndex: this.state.allArticles[newIndex] });
  };
  prevArticle = () => {
    let newIndex = this.state.currentIndex.index - 1;
    this.setState({ currentIndex: this.state.allArticles[newIndex] });
  };
  render() {
    console.log();
    const article = this.state.allArticles.length
      ? this.state.currentIndex
      : null;

    return (
      <div>
        <h1>Top Stories</h1>
        <div className='slider-container'></div>
        <button className='previous-button' onClick={this.prevArticle}>
          previous
        </button>
        <div>
          {this.state.allArticles.length ? (
            <Card
              image={article.urlToImage}
              title={article.title}
              description={article.description}
              key={article.title}
            />
          ) : null}
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
