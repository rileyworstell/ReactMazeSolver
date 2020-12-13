import './App.css';
import React, { Component} from 'react';
import {Grid} from './components/grid/grid.jsx'
import {Button} from './components/button/button.jsx'
import {Selected} from './components/selected/selected.jsx'
import {Path} from './components/path/path.jsx'

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
arr[9][9] = "E";

// End of creating array

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gridArr: arr,
      gridLength: num,
      startPointSelecter: 0 ,
      s: null,
      path: null,
    };
    this.changeBlock = this.changeBlock.bind(this);
    this.recreateGrid = this.recreateGrid.bind(this);
    this.pointSelecter = this.pointSelecter.bind(this);
    this.recreateGrid = this.recreateGrid.bind(this);
    this.updatePathMaze = this.updatePathMaze.bind(this);
    this.awaitUpdatePath = this.awaitUpdatePath.bind(this);

  }


changeBlock(x, path=null) {
  if (path !== null) {
    console.log(path);
    this.setState({gridArr: x,  path: path});
  }
  this.setState({gridArr: x});
}

updatePathMaze = (x, i) => {
  let promise = new Promise((resolve, reject) => {
    this.setState({gridArr: x}, () => {
      setTimeout(() => { 
      i++;
      resolve(i);
    }, 250);

    });
  });

  
  console.log('promise that returns the new integer');
    return promise;
}


async awaitUpdatePath(x, path, s, e, visited) {
  debugger;
  var i = 0;
  while ( i < path.length) {
    x[path[i][0][0]][path[i][0][1]] = "Solved";
    console.log(x);
    const fetch = await this.updatePathMaze(x, i);
    console.log(fetch);
    i = fetch;
  }

  x[s[0]][s[1]] = "S";
  x[e[0]][e[1]] = "E";
  this.setState({gridArr: x, path: path});
 
}


// return the path to here and call a changeBlockSlowly(x, path) and do a this.setState({gridArr: x},() => {})  https://stackoverflow.com/questions/42018342/is-there-a-synchronous-alternative-of-setstate-in-reactjs

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
  arr[num-1][num-1] = "E";
  this.setState({gridArr: arr,
                startPointSelecter: 0 ,
                s: null,
                path: null,
  }); 
}
  render() {
  return (
    <div className="App">
     <div>This is a maze solver! <br/> Select Blocks to make them walls (red) and optionally select starting point and make a blue block. <br/>Then start the BFS. <br/> If you do not select a start point, one will be assigned for you. </div>

     <Selected startPointSelecter={this.state.startPointSelecter} 
          pointSelecter={this.pointSelecter}
          className={"selectedButton"}
          text={"Set Starting Point"}/>


    <Button gridLength={this.state.gridLength} 
          clickDo={2}
          recreateGrid={this.recreateGrid}
          path={this.state.path}
          changeBlock={this.changeBlock} 
          gridArr={this.state.gridArr} 
          className={"redButton"} 
          text={"Restart Grid"}/>

     <Button gridLength={this.state.gridLength} 
          clickDo={1}
          awaitUpdatePath={this.awaitUpdatePath}
          path={this.state.path}
          changeBlock={this.changeBlock} 
          recreateGrid={this.recreateGrid}
          gridArr={this.state.gridArr} 
          className={"button"} 
          s={this.state.s}
          text={"Start BFS"}/>
     <div></div> 
     <Grid gridLength={this.state.gridLength} 
          changeBlock={this.changeBlock} 
          gridArr={this.state.gridArr} 
          s={this.state.s}
          startPointSelecter={this.state.startPointSelecter}
          pointSelecter={this.pointSelecter}
          className="mainGrid"/> 
          <Path path={this.state.path}/>
          {/* <div id="path">Your Path: {() => {this.state.path.map((n) => n); }}</div> */}
    </div>
    
  );
  }
}

export default App;
