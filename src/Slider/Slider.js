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
    if (this.state.currentIndex.index < this.state.allArticles.length - 1) {
      let newIndex = this.state.currentIndex.index + 1;
      this.setState({ currentIndex: this.state.allArticles[newIndex] });
    }
  };
  prevArticle = () => {
    let newIndex = this.state.currentIndex.index - 1;
    this.setState({ currentIndex: this.state.allArticles[newIndex] });
  };

  render() {
    console.log();
    // const article = this.state.allArticles.length
    //   ? this.state.currentIndex
    //   : null;
    return (
      <div className='slider-container'>
        <i class='fas fa-question-circle'></i>
        <div className='cards-slider-wrapper'>
          <div
            className='cards-slider'
            style={
              this.state.allArticles.length
                ? {
                    transform: `translateX(-${this.state.currentIndex.index *
                      (99.85 / this.state.allArticles.length)}%)`
                  }
                : null
            }
          >
            {this.state.allArticles.length
              ? this.state.allArticles.map(article => (
                  <Card
                    className='card'
                    image={article.urlToImage}
                    title={article.title}
                    description={article.description}
                    key={article.title}
                    url={article.url}
                  />
                ))
              : null}
            {/* {this.props.data.map(article => (
            <Card
              image={article.urlToImage}
              title={article.title}
              description={article.description}
              key={article.title}
            />
          ))} */}
          </div>
        </div>
        <div className='button-container'>
          <button
            className='previous-button'
            onClick={this.prevArticle}
            disabled={
              this.state.allArticles.length
                ? this.state.currentIndex.index === 0
                : null
            }
          >
            &lt;
          </button>
          <button
            className='next-button'
            onClick={this.nextArticle}
            disabled={
              this.state.allArticles.length
                ? this.state.currentIndex.index ===
                  this.state.allArticles.length - 1
                : null
            }
          >
            &gt;
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
