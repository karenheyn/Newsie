import React from "react";
import "./App.css";
import Slider from "./Slider/Slider";
const key = "37c291dbdee64f5c9b9601e9033fca5f";
const urlOne = `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${key}`;
const urlTwo = `https://newsapi.org/v2/top-headlines?category=technology&pageSize=100&language=en&country=us&sortBy=publishedAt&apiKey=${key}`;
const urlThree = `https://newsapi.org/v2/top-headlines?category=sports&pageSize=100&language=en&country=us&sortBy=publishedAt&apiKey=${key}`;
const urlFour = `https://newsapi.org/v2/top-headlines?category=business&pageSize=100&language=en&country=us&sortBy=publishedAt&apiKey=${key}`;
const urlFive = `https://newsapi.org/v2/top-headlines?category=entertainment&pageSize=100&language=en&country=us&sortBy=publishedAt&apiKey=${key}`;
const urlSix = `https://newsapi.org/v2/top-headlines?category=science&pageSize=100&language=en&country=us&sortBy=publishedAt&apiKey=${key}`;
const urlSeven = `https://newsapi.org/v2/top-headlines?category=health&pageSize=100&language=en&country=us&sortBy=publishedAt&apiKey=${key}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      techData: [],
      sportsData: [],
      businessData: [],
      entertainmentData: [],
      scienceData: [],
      healthData: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    Promise.all([
      fetch(urlOne),
      fetch(urlTwo),
      fetch(urlThree),
      fetch(urlFour),
      fetch(urlFive),
      fetch(urlSix),
      fetch(urlSeven)
    ])
      .then(([res1, res2, res3, res4, res5, res6, res7]) =>
        Promise.all([
          res1.json(),
          res2.json(),
          res3.json(),
          res4.json(),
          res5.json(),
          res6.json(),
          res7.json()
        ])
      )
      .then(([data1, data2, data3, data4, data5, data6, data7]) =>
        this.setState({
          data: data1.articles,
          techData: data2.articles,
          sportsData: data3.articles,
          businessData: data4.articles,
          entertainmentData: data5.articles,
          scienceData: data6.articles,
          healthData: data7.articles,
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
    const sportsArticlesWithIndex = this.state.sportsData.map(
      (article, index) => ({
        //adds key value of index to obj arr so it can be used for slider
        ...article,
        index: index
      })
    );
    const businessArticlesWithIndex = this.state.businessData.map(
      (article, index) => ({
        //adds key value of index to obj arr so it can be used for slider
        ...article,
        index: index
      })
    );
    const entertainmentArticlesWithIndex = this.state.entertainmentData.map(
      (article, index) => ({
        //adds key value of index to obj arr so it can be used for slider
        ...article,
        index: index
      })
    );
    const scienceArticlesWithIndex = this.state.scienceData.map(
      (article, index) => ({
        //adds key value of index to obj arr so it can be used for slider
        ...article,
        index: index
      })
    );
    const healthArticlesWithIndex = this.state.healthData.map(
      (article, index) => ({
        //adds key value of index to obj arr so it can be used for slider
        ...article,
        index: index
      })
    );
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
          newsynews <Slider data={businessArticlesWithIndex} />
        </div>
        <div className='content-container'>
          newsynews <Slider data={techArticlesWithIndex} />
        </div>

        <div className='content-container'>
          newsynews
          <Slider data={sportsArticlesWithIndex} />
        </div>
        <div className='content-container'>
          newsynews
          <Slider data={entertainmentArticlesWithIndex} />
        </div>
        <div className='content-container'>
          newsynews
          <Slider data={scienceArticlesWithIndex} />
        </div>
        <div className='content-container'>
          newsynews
          <Slider data={healthArticlesWithIndex} />
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
