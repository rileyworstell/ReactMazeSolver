
export const bfs = (props, arr, sP) => {
    var s;
    if (sP !== null) {
        s = sP
        arr[s[0]][s[1]] = "S";
    }
    else {
        arr[0][0] = "S"
        s = [0, 0];
    }
    var prev;
    var R = 10;
    var C = 10;
    var dr = [-1, 1, 0, 0];
    var dc = [0, 0, 1, -1];
    // put an ending point
    arr[9][9] = "E"

    var e = [9, 9];

    props.changeBlock(arr);

    prev = solve(s, prev, R, C, dr, dc, arr)

    return reconstructPath(s, e, prev, arr, props)
}

export const reconstructPath = (s, e, prev, arr, props) => {
    var c1;
    var c2;
    var b1;
    var b2;
    var path = [];
    if (prev == undefined) {
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


    // return path

    //
    var x = arr;

    // this is not working as expected because it is calling setState in a loop
    for (var z = 0; z < path.length - 1; z++) {
        x[path[z][0][0]][path[z][0][1]] = "Solved"
        props.changeBlock(x);
    }
        // starting point sometimes gets added to path
        x[s[0]][s[1]] = "S"
        props.changeBlock(x, path);    

    }
}


export const solve = (s, prev, R, C, dr, dc, arr) => {
	var rr = 0;
	var cc = 0;
	var parent;
  var r = s[0];
  var c = s[1];
  var q = [];
  prev = [];
  q.push([r, c]);
  var visited = [];
  for (var i = 0; i < 10; i++) {
    visited[i] = new Array(10);
  }
  for (i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        visited[i][j] = 0;
    }
  }
  visited[r][c] = 1;
  
  while (q.length !== 0) {
  	r = q[0][0];
    c = q[0][1];
    parent = q.shift();
    
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
            return prev;
         }
         if (arr[rr][cc] === "1") {
                 continue;
         }

         if (visited[rr][cc] !== 1) {
         	q.push([rr, cc]);
          visited[rr][cc] = 1;
          prev.push([[rr, cc], [parent]]);
         }
  }
  
}
}

// bfs(s, e);
