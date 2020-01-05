import React from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='App'>
        <nav className='nav'>News </nav>
        <div className='content-container'>newsynews</div>
        <div className='content-container'>newsynews</div>
        <div className='content-container'>newsynews</div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
