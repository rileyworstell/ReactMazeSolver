import './App.css';
import React, { Component } from 'react';
import {Grid} from './components/grid/grid.jsx'
import {Button} from './components/button/button.jsx'
import {Selected} from './components/selected/selected.jsx'

// Creates Array to be able to map over the blocks
var arr = [];
var num = 10;
for (var i = 0; i < num; i++) {
  arr[i] = new Array(num);
}
for (i = 0; i < num; i++) {
  for (var j = 0; j < num; j++) {
      arr[i][j] = "0";
  }
}

// End of creating array

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gridArr: arr,
      gridLength: num,
      startPointSelecter: 0 ,
      s: null
    };
    this.changeBlock = this.changeBlock.bind(this);
    this.recreateGrid = this.recreateGrid.bind(this);
    this.pointSelecter = this.pointSelecter.bind(this);
  }
changeBlock(x) {
  this.setState({gridArr: x});
}

pointSelecter(point) {
    if (point !== [-1, -1]) {
      this.setState({startPointSelecter: this.state.startPointSelecter + 1,
                  s: point});
    }else {
     this.setState({startPointSelecter: this.state.startPointSelecter + 1});
    }
}

recreateGrid() {
  var arr = [];
  var num = 10;
  for (var i = 0; i < num; i++) {
    arr[i] = new Array(num);
  }
  for (i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
        arr[i][j] = "0";
    }
  }
  this.setState({gridArr: arr}); 
}
  render() {
  return (
    <div className="App">
     <div>Hello Riley </div>
     <Selected startPointSelecter={this.state.startPointSelecter} 
          pointSelecter={this.pointSelecter}
          className={"selectedButton"}
          text={"Set Starting Point"}/>

     <Button gridLength={this.state.gridLength} 
          changeBlock={this.changeBlock} 
          gridArr={this.state.gridArr} 
          className={"button"} 
          s={this.state.s}
          text={"Start BFS"}/>
     <div></div> 
     <Grid gridLength={this.state.gridLength} 
          changeBlock={this.changeBlock} 
          gridArr={this.state.gridArr} 
          startPointSelecter={this.state.startPointSelecter}
          pointSelecter={this.pointSelecter}
          className="mainGrid"/> 
    </div>
  );
  }
}

export default App;
