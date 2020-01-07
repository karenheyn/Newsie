import React from "react";
import "./App.css";
import Slider from "./Slider/Slider";
const key = "37c291dbdee64f5c9b9601e9033fca5f";
const urlOne = `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${key}`;
// const urlTwo = `https://newsapi.org/v2/sources?language=en&country=us&apiKey=${key}`;

const urlTwo = `https://newsapi.org/v2/top-headlines?category=technology&pageSize=100&language=en&country=us&sortBy=publishedAt&apiKey=${key}`;
const urlThree = `https://newsapi.org/v2/top-headlines?category=sports&pageSize=100&language=en&country=us&sortBy=publishedAt&apiKey=${key}`;

function getDateParam() {
  const d = new Date();
  d.setDate(d.getDate() - 2);
  const twoDaysAgo = d.toISOString();
  return twoDaysAgo;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      techData: [],
      sportsData: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    Promise.all([fetch(urlOne), fetch(urlTwo), fetch(urlThree)])
      .then(([res1, res2, res3]) =>
        Promise.all([res1.json(), res2.json(), res3.json])
      )
      .then(([data1, data2, data3]) =>
        this.setState({
          data: data1.articles,
          techData: data2.articles,
          sportsData: data3.articles,
          isLoading: false
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    const articlesWithIndex = this.state.data.map((article, index) => ({
      //adds key value of index to obj arr so it can be used for slider
      ...article,
      index: index
    }));
    const techArticlesWithIndex = this.state.techData.map((article, index) => ({
      //adds key value of index to obj arr so it can be used for slider
      ...article,
      index: index
    }));
    console.log(this.state.catData); //remove later
    console.log(this.state.data);
    const isLoading = this.state.isLoading;
    if (isLoading) {
      return <h1>Loading ...</h1>; //this is going to be a loading animation
    }
    return (
      <div className='App'>
        <nav className='nav'>News </nav>
        <div className='content-container'>
          <Slider data={articlesWithIndex} />
        </div>
        <div className='content-container'>
          newsynews <Slider data={techArticlesWithIndex} />
        </div>

        <div className='content-container'>newsynews</div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
