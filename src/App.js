import './App.css';
import React, { Component} from 'react';
import {Grid} from './components/grid/grid.jsx'
import {Button} from './components/button/button.jsx'
import {Selected} from './components/selected/selected.jsx'
import {Path} from './components/path/path.jsx'
import {Arr} from './algorithms/initializeArr'
import {Color} from './components/color/color.jsx'



class App extends Component {

  constructor(props) {
    super(props);
    let initialValues = Arr();
    var arr = initialValues[0];
    var num = initialValues[1];
    this.state = {
      gridArr: arr,
      gridLength: num,
      startPointSelecter: 0 ,
      s: null,
      path: null,
      colorScheme: 2
    };
    this.changeBlock = this.changeBlock.bind(this);
    this.recreateGrid = this.recreateGrid.bind(this);
    this.pointSelecter = this.pointSelecter.bind(this);
    this.recreateGrid = this.recreateGrid.bind(this);
    this.updatePathMaze = this.updatePathMaze.bind(this);
    this.awaitUpdatePath = this.awaitUpdatePath.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }


changeBlock(x, path=null) {
  if (path !== null) {
    this.setState({gridArr: x,  path: path});
  }
  this.setState({gridArr: x});
}

updatePathMaze = (x, i, leng) => {
  var time = 15;
  if (i > leng) {
    time =100;
  }
  let promise = new Promise((resolve, reject) => {
    this.setState({gridArr: x}, () => {
      setTimeout(() => { 
      i++;
      resolve(i);
    }, time);
    });
  });
    return promise;
}


async awaitUpdatePath(x, path, s, e, leng) {
  // i is the promise and when the promise is returned it is incremented (this is for UI purposes)
  var i = 0;
  while ( i < path.length) {
    // the first part of path is all of the visited up until the variable length and then that is the path to solve
    if ( i <= leng) {
      x[path[i][0][0]][path[i][0][1]] = "V";
    } else {
      x[path[i][0][0]][path[i][0][1]] = "Solved";
    }
    const fetch = await this.updatePathMaze(x, i, leng);
    i = fetch;
  }

  // resets starting and ending points
  x[s[0]][s[1]] = "S";
  x[e[0]][e[1]] = "E";
  // this splits that path to solve from the whole path
  path.splice(0, leng);
  this.setState({gridArr: x, path: path});
 
}

pointSelecter(point) {
    if (point !== [-1, -1]) {
      this.setState({startPointSelecter: this.state.startPointSelecter + 1,
                  s: point});
    }else {
     this.setState({startPointSelecter: this.state.startPointSelecter + 1});
    }
}

changeColor() {
 if (this.state.colorScheme !== 2) {
   this.setState({colorScheme: 2});
 }
 else {
  this.setState({colorScheme: 1});
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
     <div>This is a maze solver!
       <br/> Select Blocks to make them walls (red) and optionally select starting point and make a blue block. 
       <br/> Yellow will show the algorithm working and Green is the path. 
       <br/> Then start the BFS. 
       <br/> If you do not select a start point, one will be assigned for you. </div>

     <Selected startPointSelecter={this.state.startPointSelecter} 
          pointSelecter={this.pointSelecter}
          className={"selectedButton"}
          text={"Set Starting Point"}/>


    <Button gridLength={this.state.gridLength} 
          clickDo={'recreateGrid'}
          recreateGrid={this.recreateGrid}
          path={this.state.path}
          changeBlock={this.changeBlock} 
          gridArr={this.state.gridArr} 
          className={"redButton"} 
          text={"Restart Grid"}/>

     <Button gridLength={this.state.gridLength} 
          clickDo={'bfs'}
          awaitUpdatePath={this.awaitUpdatePath}
          path={this.state.path}
          changeBlock={this.changeBlock} 
          recreateGrid={this.recreateGrid}
          gridArr={this.state.gridArr} 
          className={"button"} 
          s={this.state.s}
          text={"Start BFS"}/>

          <Color changeColor={this.changeColor} text={"Switch Colors"} />
     <div></div> 
     <Grid gridLength={this.state.gridLength} 
          colorScheme={this.state.colorScheme}
          changeBlock={this.changeBlock} 
          gridArr={this.state.gridArr} 
          s={this.state.s}
          startPointSelecter={this.state.startPointSelecter}
          pointSelecter={this.pointSelecter}
          className="mainGrid"/> 
          <br />
          <br />
          <Path path={this.state.path}/>
    </div>
    
  );
  }
}

export default App;
