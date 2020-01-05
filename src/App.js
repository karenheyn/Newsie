import React from "react";
import "./App.css";
import Slider from "./Slider/Slider";
const key = "37c291dbdee64f5c9b9601e9033fca5f";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(url)
      .then(res => res.json())
      .then(newsdata => this.setState({ data: newsdata, isLoading: false }))
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state); //remove later
    const isLoading = this.state.isLoading;
    if (isLoading) {
      return <h1>Loading ...</h1>; //this is going to be a loading animation
    }
    return (
      <div className='App'>
        <nav className='nav'>News </nav>
        <div className='content-container'>
          newsynews
          <Slider />
        </div>
        <div className='content-container'>newsynews</div>
        <div className='content-container'>newsynews</div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
