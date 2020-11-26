import React, { Component } from 'react';
import './App.css';
import happyBirthday from './happyBirthday.jpg';
import curtains from './curtains.jpg';
import i01 from './assets/01.JPG'
import i02 from './assets/02.JPG'
import i03 from './assets/03.JPG'
import i04 from './assets/04.JPG'
import i05 from './assets/05.JPG'
import i06 from './assets/06.JPG'
import i07 from './assets/07.JPG'
import i08 from './assets/08.JPG'
import i09 from './assets/09.JPG'
import i010 from './assets/10.JPG'
import i011 from './assets/11.JPG'
import i012 from './assets/12.jpg'

class App extends Component {
  name = 'Angel'
  timer = null;
  images = [i01, i02, i03, i04, i05, i06, i07, i08, i09, i010, i011, i012]
  constructor(props){
    super(props);
    this.name = window.location.href;
    this.name = this.name.split('/');
    this.name = this.name.slice(-1)+"";
    this.state={
      currentImage: 0
    }
  }

  startSlideShow=()=>{
    this.timer = setInterval(()=>{
      this.setState((prevState)=> {return {currentImage: prevState.currentImage + 1}})
    }, 5000)
  }

  previous=()=>{
    clearInterval(this.timer)
    this.setState((prevState)=> {return {currentImage: prevState.currentImage - 1}})
    this.startSlideShow()
  }

  next=()=>{
    clearInterval(this.timer)
    this.setState((prevState)=> {return {currentImage: prevState.currentImage + 1}})
    this.startSlideShow()
  }

  restart=()=>{
    clearInterval(this.timer)
    this.setState({currentImage: 0})
    this.startSlideShow()
  }

  componentDidMount(){
    this.startSlideShow()
  }
  componentWillUpdate=()=>{
    if(this.state.currentImage >= 10){
      clearInterval(this.timer)
    }
  }
  render() {
    
    console.log(this.state.currentImage)
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
            <div className="progress-bar">
              <div className="image-count">
                {+(this.state.currentImage+1) + '/12'}
              </div>
            </div>
            <div className="photoframe">
              <img src={this.images[this.state.currentImage]} className="birthday" alt=""></img>
            </div>
            <div className="right-arror-container" onClick={this.next}>
              <div className="right-arrow"></div>
            </div>
            <div className="left-arrow-container" onClick={this.previous}>
              <div className="left-arrow"></div>
            </div>
          </div>
          <div className="restart-button" onClick={this.restart}>
            Restart
          </div>
      </div>
    );
  }
}

export default App;
