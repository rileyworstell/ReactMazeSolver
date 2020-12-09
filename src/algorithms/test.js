// 1. Code runs as you type: edit message
let msg = 'hello world'

// 2. Files import automatically: uncomment this
// msg = capitalize(msg)

  
console.log({ myMessage: msg })

var R = 6;
var C = 6;
var dr = [-1, 1, 0, 0];
var dc = [0, 0, 1, -1];
var arr = [];
var row = 0
for (var i = 0; i <= 48; i++) {
  // create 2 x 2 array
  var x = i
  if (i != 0 && i % 7 === 0) {
    row++;
  }
  if (row >= 1) {
    x = i % 7;
  }
   arr.push([[row, x], "0"]);

}
// put a starting point
arr[0][1] = "S"
s = [0, 0];
// put an ending point
arr[48][1] = "E"
e = [6, 6];


console.log(arr);
var visited = new Array(6).fill(new Array(6).fill(0));
console.log(visited);

bfs = (s, e) => {
prev = solve(s)

}

solve = (s) => {
	var rr;
	var cc;
	var parent;
  var r = s[0];
  var c = s[1];
  var q = [];
  q.push([r, c]);
  var visited = new Array(6).fill(new Array(6).fill(0));
  visited[r][c] = 1;
  
  while (q.length != 0) {
  	r = q[0][0];
    c = q[0][1];
    parent = q.shift();
    
    for (var x1 = 0; x1 < 4; x1++) {
    	rr = r + dr[i];
      cc = c + dc[i];
      	if (rr < 0 || cc < 0) {
      		console.log("doing nothing");
          continue;
      	}
        if (rr >= R || cc >= C) {
      		console.log("doing nothing");
          continue;
    		}
    		if (arr[0][rr][cc] == "e"){
        		prev.append([[rr, cc], [parent]]);
            prev.shift();
            prev.reverse();
            console.log("solved");
            console.log(prev);
            return prev;
         }
         if (grid[0][rr][cc] != "1") {
         		console.log("This is a wall");
         }
         if (visited[rr][cc] === 1) {
         	q.append([rr, cc]);
          visited[rr][cc] = 1;
          prev.append([[rr, cc], [parent]]);
         }
  }
  
}
}

bfs(s, e);
