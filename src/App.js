import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import heart from './heart.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="stars"></div>
        <div className="twinkling heart-div">
          <img src={heart} className="heart"></img>
          <label id="pre-text">I love you my</label>
          <label id="name" className="pulse">Angel</label>
        </div>
        <div className="clouds"></div>
        <div id="author">Created by Anil Yadav</div>
      </div>
    );
  }
}

export default App;
