import './App.css';
import React, { Component} from 'react';
import {Grid} from './components/grid/grid.jsx'
import {Button} from './components/button/button.jsx'
import {Selected} from './components/selected/selected.jsx'
import {Path} from './components/path/path.jsx'
import {Arr} from './algorithms/initializeArr'
import {Color} from './components/color/color.jsx'
import MetaTags from 'react-meta-tags';

let initialValues = Arr(20);
var arr = initialValues[0];
var num = initialValues[1];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gridArr: arr,
      gridLength: num,
      startPointSelecter: 0 ,
      s: null,
      path: null,
      colorScheme: 1,
      gridClassName: 'mainGrid12',
      isClickedDown: 0
    };
    this.changeBlock = this.changeBlock.bind(this);
    this.recreateGrid = this.recreateGrid.bind(this);
    this.pointSelecter = this.pointSelecter.bind(this);
    this.recreateGrid = this.recreateGrid.bind(this);
    this.updatePathMaze = this.updatePathMaze.bind(this);
    this.awaitUpdatePath = this.awaitUpdatePath.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.isDown = this.isDown.bind(this);
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
    time =50;
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
  // console.log(path);
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
  x[path[leng][0][0]][path[leng][0][1]] = "Solved"
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

isDown() {
  if (this.state.isClickedDown !== 1) {
    this.setState({isClickedDown: 1});
  }
  else {
   this.setState({isClickedDown: 0});
  }
 }

changeSize() {
  if (this.state.gridLength === 15) {  
    this.setState({gridLength: 20, gridClassName: 'mainGrid12'});
    this.recreateGrid(20);
  }
  else {
   this.setState({gridLength: 15, gridClassName: 'mainGrid'});
   this.recreateGrid(15);
  }
  
 }


recreateGrid(x, notWalls) {
  var i;
  var j;
  var arr = [];
  var num;
  if (x === null || x === undefined) {
    num = this.state.gridLength;
  }
  else {
    num = x;
  }
  if (notWalls === true) {
    arr = this.state.gridArr;
    for (i = 0; i < num; i++) {
      for (j = 0; j < num; j++) {
        if (arr[i][j] !== "1") {
          arr[i][j] = "0";
        }
          
      }
    }
    arr[num-1][num-1] = "E";
    this.setState({gridArr: arr,
                  startPointSelecter: 0,
                  path: null
    }); 
  }

  else {
  for (i = 0; i < num; i++) {
    arr[i] = new Array(num);
  }
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
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
}
  render() {
  return (
    <div draggable={false} onDragOver={() => this.isDown()} onMouseDown={() => this.isDown()} onMouseUp={() => this.isDown()} className="App">
      <MetaTags>
      <meta name="Maze Solver" property="og:title" content="Maze Solver" />
    <meta property="og:type" content="[Content type here]" />
    <meta name="image" property="og:image" content="./public/mazePic.png" />
    <meta name="description" property="og:description" content="Maze Solver" />
    <meta name="author" content="Riley Worstell"></meta>
    </MetaTags>
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
          gridLength={this.state.gridLength}
          awaitUpdatePath={this.awaitUpdatePath}
          path={this.state.path}
          changeBlock={this.changeBlock} 
          recreateGrid={this.recreateGrid}
          gridArr={this.state.gridArr} 
          className={"button"} 
          s={this.state.s}
          text={"Start BFS"}/>

<Button gridLength={this.state.gridLength} 
          clickDo={'dfs'}
          gridLength={this.state.gridLength}
          awaitUpdatePath={this.awaitUpdatePath}
          path={this.state.path}
          changeBlock={this.changeBlock} 
          recreateGrid={this.recreateGrid}
          gridArr={this.state.gridArr} 
          className={"button"} 
          s={this.state.s}
          text={"Start DFS"}/>

          <Color elector={1} changeColor={this.changeColor} text={"Switch Colors"} />
          <Color  elector={2} changeSize={this.changeSize} text={"Switch Size"} />
     <div></div> 

     <Grid gridLength={this.state.gridLength} 
          isDown={this.isDown}
          isClickedDown={this.state.isClickedDown}
          colorScheme={this.state.colorScheme}
          changeBlock={this.changeBlock} 
          gridArr={this.state.gridArr} 
          s={this.state.s}
          startPointSelecter={this.state.startPointSelecter}
          pointSelecter={this.pointSelecter}
          className={this.state.gridClassName}/> 
          <br />
          <br />
          <Path path={this.state.path}/>
    </div>
    
  );
  }
}

export default App;
