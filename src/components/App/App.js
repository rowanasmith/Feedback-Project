import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ReviewComponent from '../ReviewComponent/ReviewComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <div>
          The forms will generate here
        </div> 
        <div>
          <ReviewComponent />
        </div>
      </div>
    );
  }
}

export default App;
