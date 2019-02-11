import React, { Component } from 'react';
import './App.css';
import happyBirthday from './happyBirthday.jpg';
import curtains from './curtains.jpg';

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
    if(this.name === 'yx2pn77b'){
      nameToDisplay = "Anjali"
    } else if(this.name === 'lk4jovfd9'){
      nameToDisplay = 'Maggi'
    }
    return (
      <div className="App">
        <div className="stars"></div>
        <div className="twinkling heart-div">
          <img src={happyBirthday} className="birthday" alt=""></img>
          <img src={curtains} className="curtains" alt=""></img>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
