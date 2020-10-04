import React, {Component} from 'react';
import P5Wrapper from 'react-p5-wrapper';
import displayByCharacter from './sketches/test';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {color:[Math.random()*255, Math.random()*255, Math.random()*255]};
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor(){
    this.setState({color:[Math.random()*255, Math.random()*255, Math.random()*255]});
  }

  render(){
    return(
      <div>
        <P5Wrapper sketch={displayByCharacter}></P5Wrapper>
      </div>
    )
  }
}

export default App;
