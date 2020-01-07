import React from "react";
import "./App.css";
import Slider from "./Slider/Slider";
const key = "37c291dbdee64f5c9b9601e9033fca5f";
const urlOne = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
// const urlTwo = `https://newsapi.org/v2/sources?language=en&country=us&apiKey=${key}`;

const urlTwo = `https://newsapi.org/v2/everything?q=technology&from=${getDateParam()}&sortBy=publishedAt&apiKey=${key}`;

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
      catData: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    Promise.all([fetch(urlOne), fetch(urlTwo)])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) =>
        this.setState({
          data: data1.articles,
          catData: data2,
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
    console.log(this.state.catData); //remove later
    const isLoading = this.state.isLoading;
    if (isLoading) {
      return <h1>Loading ...</h1>; //this is going to be a loading animation
    }
    return (
      <div className='App'>
        <nav className='nav'>News </nav>
        <div className='content-container'>
          newsynews
          <Slider data={articlesWithIndex} />
        </div>
        <div className='content-container'>newsynews</div>
        <div className='content-container'>newsynews</div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
