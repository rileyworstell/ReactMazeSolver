
export const dfs = (props, arr, sP) => {
    var s;
    if (sP !== null && sP !== undefined) {
        s = sP
        arr[s[0]][s[1]] = "S";
    }
    else {
        arr[0][0] = "S"
        s = [0, 0];
    }
    var prev;
    var visitedList = [];
    var R = props.gridLength;
    var C = props.gridLength;
    var dr = [-1, 1, 0, 0];
    var dc = [0, 0, 1, -1];
    // put an ending point
    arr[props.gridLength-1][props.gridLength-1] = "E"

    var e = [props.gridLength-1, props.gridLength-1];

    props.changeBlock(arr);

    prev = solve(s, prev, R, C, dr, dc, arr, props, visitedList)

    return reconstructPath(s, e, prev, arr, props, visitedList)
}

export const reconstructPath = (s, e, prev, arr, props, visitedList) => {
    var c1;
    var c2;
    var b1;
    var b2;
    var path = [];
    if (prev === undefined) {
        return;
    } else {
    path.push([prev[0][0]])
    for (var i = 0; i < prev.length; i++) {
        c1 = path[path.length-1][0][0]
        c2 = path[path.length-1][0][1]
        b1 = prev[i][1][0][0]
        b2 = prev[i][1][0][1]
        if (c1 === b1){
            if (c2 === b2 +1 || c2 === b2 - 1){
                path.push(prev[i][1])
            }
        }
        if (c2 === b2){
            if (c1 === b1 + 1 || c1 === b1 - 1) {
                path.push(prev[i][1])
            }}

    }
    path.reverse()

    var x = arr;
    var leng = visitedList.length;

    // push visited spots to beginning of path before calling awaitUpdatePath
    for (var z = 0; z < visitedList.length; z++) {
      path.unshift([visitedList[z]]);
    }
    props.awaitUpdatePath(x, path, s, e, leng );
    }
}


export const solve = (s, prev, R, C, dr, dc, arr, props, visitedList) => {
	var rr = 0;
	var cc = 0;
	var parent;
  var r = s[0];
  var c = s[1];
  var stack = [];
  prev = [];
  stack.push([r, c]);
  var visited = [];
  for (var i = 0; i < props.gridLength; i++) {
    visited[i] = new Array(props.gridLength);
  }
  for (i = 0; i < props.gridLength; i++) {
    for (var j = 0; j < props.gridLength; j++) {
        visited[i][j] = 0;
    }
  }
  visited[r][c] = 1;
  visitedList.unshift([r, c]);
//   props.updateVisited(r, c);

  
  while (stack.length !== 0) {
  	r = stack[stack.length-1][0];
    c = stack[stack.length-1][1];
    parent = stack.pop();
    for (var x1 = 0; x1 < 4; x1++) {
    	rr = r + dr[x1];
        cc = c + dc[x1];
      	if (rr < 0 || cc < 0) {
          continue;
      	}
        if (rr >= R || cc >= C) {
          continue;
    		}
    		if (arr[rr][cc] === "E"){
        		prev.push([[rr, cc], [parent]]);
            prev.shift();
            prev.reverse();
            console.log(prev);
            return prev;
         }
         if (arr[rr][cc] === "1") {
                 continue;
         }

         if (visited[rr][cc] !== 1) {
         	stack.push([rr, cc]);
          visited[rr][cc] = 1;
          visitedList.unshift([r, c]);
          prev.push([[rr, cc], [parent]]);
         }
  }
  
}
}

