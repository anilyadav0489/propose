import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import heart from './heart.png';

class App extends Component {
  name = 'Angel'
  constructor(props){
    super(props);
    this.name = window.location.href;
    this.name = this.name.split('/');
    this.name = this.name.slice(-1)+"";
  }
  componentWillUpdate=()=>{
    
  }
  render() {
    let nameToDisplay = "Angel"
    if(this.name == 'yx2pn77b'){
      nameToDisplay = "Anjali"
    } else if(this.name == 'lk4jovfd9'){
      nameToDisplay = 'Maggi'
    }
    return (
      <div className="App">
        <div className="stars"></div>
        <div className="twinkling heart-div">
          <img src={heart} className="heart"></img>
          <label id="pre-text">I love you my</label>
          <label id="name" className="pulse">{nameToDisplay}</label>
        </div>
        <div className="clouds"></div>
        <div id="author">Created by Anil Yadav</div>
      </div>
    );
  }
}

export default App;
