(this["webpackJsonpmaze-solver"]=this["webpackJsonpmaze-solver"]||[]).push([[0],{20:function(t,e,r){},22:function(t,e,r){},23:function(t,e,r){},24:function(t,e,r){},25:function(t,e,r){},26:function(t,e,r){},27:function(t,e,r){},28:function(t,e,r){},31:function(t,e,r){"use strict";r.r(e);var n=r(0),i=r(2),a=r.n(i),c=r(5),s=r.n(c),o=(r(20),r(1)),l=r(6),h=r.n(l),d=r(9),g=r(10),u=r(11),f=r(3),b=r(14),j=r(13),p=(r(22),r(23),r(24),function(t){1===t.isClickedDown&&S(t)}),S=function(t){var e,r=t.gridLength;e=t.id<r?0:Math.floor(t.id/r);var n=t.id%r,i=t.gridArr;"S"!==i[e][n]&&(1===t.startPointSelecter?(i[e][n]="S",t.changeBlock(i),t.pointSelecter([e,n])):"0"===t.gridArr[e][n]?(i[e][n]="1",t.changeBlock(i)):(i[e][n]="0",t.changeBlock(i)))},v=function(t){var e,r=t.gridLength;e=t.id<r?0:Math.floor(t.id/r);var i=t.id%r;return"0"===t.gridArr[e][i]?(t.colorScheme,Object(n.jsx)("div",{id:t.id,onMouseEnter:function(){return p(t)},onClick:function(){return S(t)},className:t.className})):"S"===t.gridArr[e][i]||"E"===t.gridArr[e][i]?2===t.colorScheme?Object(n.jsx)("div",{id:t.id,onMouseEnter:function(){return p(t)},onClick:function(){return S(t)},className:"".concat(t.className," blockColorOrange")}):Object(n.jsx)("div",{id:t.id,onClick:function(){return S(t)},className:"".concat(t.className," blockColorBlue")}):"V"===t.gridArr[e][i]?2===t.colorScheme?Object(n.jsx)("div",{id:t.id,onClick:function(){return S(t)},className:"".concat(t.className," blockColorOcean")}):Object(n.jsx)("div",{id:t.id,onClick:function(){return S(t)},className:"".concat(t.className," blockColorYellow")}):"Solved"===t.gridArr[e][i]?2===t.colorScheme?Object(n.jsx)("div",{id:t.id,onClick:function(){return S(t)},className:"".concat(t.className," blockColorPink")}):Object(n.jsx)("div",{id:t.id,onClick:function(){return S(t)},className:"".concat(t.className," blockColorGreen")}):2===t.colorScheme?Object(n.jsx)("div",{id:t.id,onMouseEnter:function(){return p(t)},onClick:function(){return S(t)},className:"".concat(t.className," blockColorSalmon")}):Object(n.jsx)("div",{id:t.id,onMouseEnter:function(){return p(t)},onClick:function(){return S(t)},className:"".concat(t.className," blockColorRed")})},m=function(t){t.gridArr;for(var e=[],r=0;r<t.gridLength*t.gridLength;r++)e.push(r);return Object(n.jsx)("div",{className:t.className,children:e.map((function(e,r){return Object(n.jsx)(v,{isDown:t.isDown,isClickedDown:t.isClickedDown,colorScheme:t.colorScheme,s:t.s,pointSelecter:t.pointSelecter,startPointSelecter:t.startPointSelecter,gridLength:t.gridLength,changeBlock:t.changeBlock,gridArr:t.gridArr,className:"block",id:r},r)}))})},O=(r(25),function(t,e,r,n,i,a){var c,s,o,l,h=[];if(void 0!==r){h.push([r[0][0]]);for(var d=0;d<r.length;d++)c=h[h.length-1][0][0],s=h[h.length-1][0][1],o=r[d][1][0][0],l=r[d][1][0][1],c===o&&(s!==l+1&&s!==l-1||h.push(r[d][1])),s===l&&(c!==o+1&&c!==o-1||h.push(r[d][1]));h.reverse();for(var g=n,u=a.length,f=0;f<a.length;f++)h.unshift([a[f]]);i.awaitUpdatePath(g,h,t,e,u)}}),k=function(t,e,r,n,i,a,c,s,o){var l,h=0,d=0,g=t[0],u=t[1],f=[];e=[],f.push([g,u]);for(var b=[],j=0;j<s.gridLength;j++)b[j]=new Array(s.gridLength);for(j=0;j<s.gridLength;j++)for(var p=0;p<s.gridLength;p++)b[j][p]=0;for(b[g][u]=1,o.unshift([g,u]);0!==f.length;){g=f[0][0],u=f[0][1],l=f.shift();for(var S=0;S<4;S++)if(h=g+i[S],d=u+a[S],!(h<0||d<0)&&!(h>=r||d>=n)){if("E"===c[h][d])return e.push([[h,d],[l]]),e.shift(),e.reverse(),console.log(e),e;"1"!==c[h][d]&&1!==b[h][d]&&(f.push([h,d]),b[h][d]=1,o.unshift([g,u]),e.push([[h,d],[l]]))}}},x=function(t,e,r,n,i,a){var c,s,o,l,h=[];if(void 0!==r){h.push([r[0][0]]);for(var d=0;d<r.length;d++)c=h[h.length-1][0][0],s=h[h.length-1][0][1],o=r[d][1][0][0],l=r[d][1][0][1],c===o&&(s!==l+1&&s!==l-1||h.push(r[d][1])),s===l&&(c!==o+1&&c!==o-1||h.push(r[d][1]));h.reverse();for(var g=n,u=a.length,f=0;f<a.length;f++)h.unshift([a[f]]);i.awaitUpdatePath(g,h,t,e,u)}},w=function(t,e,r,n,i,a,c,s,o){var l,h=0,d=0,g=t[0],u=t[1],f=[];e=[],f.push([g,u]);for(var b=[],j=0;j<s.gridLength;j++)b[j]=new Array(s.gridLength);for(j=0;j<s.gridLength;j++)for(var p=0;p<s.gridLength;p++)b[j][p]=0;for(b[g][u]=1,o.unshift([g,u]);0!==f.length;){g=f[f.length-1][0],u=f[f.length-1][1],l=f.pop();for(var S=0;S<4;S++)if(h=g+i[S],d=u+a[S],!(h<0||d<0)&&!(h>=r||d>=n)){if("E"===c[h][d])return e.push([[h,d],[l]]),e.shift(),e.reverse(),console.log(e),e;"1"!==c[h][d]&&1!==b[h][d]&&(f.push([h,d]),b[h][d]=1,o.unshift([g,u]),e.push([[h,d],[l]]))}}},C=function(t){return Object(n.jsx)("button",{onClick:function(){"bfs"===t.clickDo?null!==t.path?t.recreateGrid(null,!0):function(t,e,r){var n,i;null!==r&&void 0!==r?e[(n=r)[0]][n[1]]="S":(e[0][0]="S",n=[0,0]);var a=[],c=t.gridLength,s=t.gridLength;e[t.gridLength-1][t.gridLength-1]="E";var o=[t.gridLength-1,t.gridLength-1];t.changeBlock(e),i=k(n,i,c,s,[-1,1,0,0],[0,0,1,-1],e,t,a),O(n,o,i,e,t,a)}(t,t.gridArr,t.s,t.slowPathRun):"dfs"===t.clickDo?null!==t.path?t.recreateGrid(null,!0):function(t,e,r){var n,i;null!==r&&void 0!==r?e[(n=r)[0]][n[1]]="S":(e[0][0]="S",n=[0,0]);var a=[],c=t.gridLength,s=t.gridLength;e[t.gridLength-1][t.gridLength-1]="E";var o=[t.gridLength-1,t.gridLength-1];t.changeBlock(e),i=w(n,i,c,s,[-1,1,0,0],[0,0,1,-1],e,t,a),x(n,o,i,e,t,a)}(t,t.gridArr,t.s,t.slowPathRun):t.recreateGrid()},className:t.className,children:t.text})},L=(r(26),function(t){return Object(n.jsx)("button",{onClick:function(){return function(t){console.log(t.startPointSelecter),t.pointSelecter()}(t)},className:t.className,children:t.text})}),N=(r(27),function(t){if(t.path){for(var e="",r=0;r<t.path.length;r++)e=e+"["+t.path[r].toString()+"]";return Object(n.jsxs)("div",{children:["Your Path: ",e]})}return Object(n.jsx)("div",{})}),P=(r(28),function(t){return 1===t.elector?Object(n.jsx)("button",{onClick:function(){return function(t){t.changeColor()}(t)},className:"colorButton",children:t.text}):2===t.elector?Object(n.jsx)("button",{onClick:function(){return function(t){t.changeSize()}(t)},className:"sizeButton",children:t.text}):void 0}),A=r(12),B=r.n(A),D=function(t){for(var e=[],r=(t=t,0);r<t;r++)e[r]=new Array(t);for(r=0;r<t;r++)for(var n=0;n<t;n++)e[r][n]="0";return e[t-1][t-1]="E",[e,t]}(20),y=D[0],G=D[1],z=function(t){Object(b.a)(r,t);var e=Object(j.a)(r);function r(t){var n;return Object(g.a)(this,r),(n=e.call(this,t)).updatePathMaze=function(t,e,r){var i=15;return e>r&&(i=50),new Promise((function(r,a){n.setState({gridArr:t},(function(){setTimeout((function(){e++,r(e)}),i)}))}))},n.state={gridArr:y,gridLength:G,startPointSelecter:0,s:null,path:null,colorScheme:1,gridClassName:"mainGrid12",isClickedDown:0},n.changeBlock=n.changeBlock.bind(Object(f.a)(n)),n.recreateGrid=n.recreateGrid.bind(Object(f.a)(n)),n.pointSelecter=n.pointSelecter.bind(Object(f.a)(n)),n.recreateGrid=n.recreateGrid.bind(Object(f.a)(n)),n.updatePathMaze=n.updatePathMaze.bind(Object(f.a)(n)),n.awaitUpdatePath=n.awaitUpdatePath.bind(Object(f.a)(n)),n.changeColor=n.changeColor.bind(Object(f.a)(n)),n.changeSize=n.changeSize.bind(Object(f.a)(n)),n.isDown=n.isDown.bind(Object(f.a)(n)),n}return Object(u.a)(r,[{key:"changeBlock",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null!==e&&this.setState({gridArr:t,path:e}),this.setState({gridArr:t})}},{key:"awaitUpdatePath",value:function(){var t=Object(d.a)(h.a.mark((function t(e,r,n,i,a){var c,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=0;case 1:if(!(c<r.length)){t.next=9;break}return e[r[c][0][0]][r[c][0][1]]=c<=a?"V":"Solved",t.next=5,this.updatePathMaze(e,c,a);case 5:s=t.sent,c=s,t.next=1;break;case 9:e[r[a][0][0]][r[a][0][1]]="Solved",e[n[0]][n[1]]="S",e[i[0]][i[1]]="E",r.splice(0,a),this.setState({gridArr:e,path:r});case 14:case"end":return t.stop()}}),t,this)})));return function(e,r,n,i,a){return t.apply(this,arguments)}}()},{key:"pointSelecter",value:function(t){t!==[-1,-1]?this.setState({startPointSelecter:this.state.startPointSelecter+1,s:t}):this.setState({startPointSelecter:this.state.startPointSelecter+1})}},{key:"changeColor",value:function(){2!==this.state.colorScheme?this.setState({colorScheme:2}):this.setState({colorScheme:1})}},{key:"isDown",value:function(){1!==this.state.isClickedDown?this.setState({isClickedDown:1}):this.setState({isClickedDown:0})}},{key:"changeSize",value:function(){15===this.state.gridLength?(this.setState({gridLength:20,gridClassName:"mainGrid12"}),this.recreateGrid(20)):(this.setState({gridLength:15,gridClassName:"mainGrid"}),this.recreateGrid(15))}},{key:"recreateGrid",value:function(t,e){var r,n,i,a=[];if(i=null===t||void 0===t?this.state.gridLength:t,!0===e){for(a=this.state.gridArr,r=0;r<i;r++)for(n=0;n<i;n++)"1"!==a[r][n]&&(a[r][n]="0");a[i-1][i-1]="E",this.setState({gridArr:a,startPointSelecter:0,path:null})}else{for(r=0;r<i;r++)a[r]=new Array(i);for(r=0;r<i;r++)for(n=0;n<i;n++)a[r][n]="0";a[i-1][i-1]="E",this.setState({gridArr:a,startPointSelecter:0,s:null,path:null})}}},{key:"render",value:function(){var t,e,r=this;return Object(n.jsxs)("div",{draggable:!1,onDragOver:function(){return r.isDown()},onMouseDown:function(){return r.isDown()},onMouseUp:function(){return r.isDown()},className:"App",children:[Object(n.jsxs)(B.a,{children:[Object(n.jsx)("meta",{name:"Maze Solver",property:"og:title",content:"Maze Solver"}),Object(n.jsx)("meta",{property:"og:type",content:"[Content type here]"}),Object(n.jsx)("meta",{name:"image",property:"og:image",content:"./public/mazePic.png"}),Object(n.jsx)("meta",{name:"description",property:"og:description",content:"Maze Solver"}),Object(n.jsx)("meta",{name:"author",content:"Riley Worstell"})]}),Object(n.jsxs)("div",{children:["This is a maze solver!",Object(n.jsx)("br",{})," Select Blocks to make them walls (red) and optionally select starting point and make a blue block.",Object(n.jsx)("br",{})," Yellow will show the algorithm working and Green is the path.",Object(n.jsx)("br",{})," Then start the BFS.",Object(n.jsx)("br",{})," If you do not select a start point, one will be assigned for you. "]}),Object(n.jsx)(L,{startPointSelecter:this.state.startPointSelecter,pointSelecter:this.pointSelecter,className:"selectedButton",text:"Set Starting Point"}),Object(n.jsx)(C,{gridLength:this.state.gridLength,clickDo:"recreateGrid",recreateGrid:this.recreateGrid,path:this.state.path,changeBlock:this.changeBlock,gridArr:this.state.gridArr,className:"redButton",text:"Restart Grid"}),Object(n.jsx)(C,(t={gridLength:this.state.gridLength,clickDo:"bfs"},Object(o.a)(t,"gridLength",this.state.gridLength),Object(o.a)(t,"awaitUpdatePath",this.awaitUpdatePath),Object(o.a)(t,"path",this.state.path),Object(o.a)(t,"changeBlock",this.changeBlock),Object(o.a)(t,"recreateGrid",this.recreateGrid),Object(o.a)(t,"gridArr",this.state.gridArr),Object(o.a)(t,"className","button"),Object(o.a)(t,"s",this.state.s),Object(o.a)(t,"text","Start BFS"),t)),Object(n.jsx)(C,(e={gridLength:this.state.gridLength,clickDo:"dfs"},Object(o.a)(e,"gridLength",this.state.gridLength),Object(o.a)(e,"awaitUpdatePath",this.awaitUpdatePath),Object(o.a)(e,"path",this.state.path),Object(o.a)(e,"changeBlock",this.changeBlock),Object(o.a)(e,"recreateGrid",this.recreateGrid),Object(o.a)(e,"gridArr",this.state.gridArr),Object(o.a)(e,"className","button"),Object(o.a)(e,"s",this.state.s),Object(o.a)(e,"text","Start DFS"),e)),Object(n.jsx)(P,{elector:1,changeColor:this.changeColor,text:"Switch Colors"}),Object(n.jsx)(P,{elector:2,changeSize:this.changeSize,text:"Switch Size"}),Object(n.jsx)("div",{}),Object(n.jsx)(m,{gridLength:this.state.gridLength,isDown:this.isDown,isClickedDown:this.state.isClickedDown,colorScheme:this.state.colorScheme,changeBlock:this.changeBlock,gridArr:this.state.gridArr,s:this.state.s,startPointSelecter:this.state.startPointSelecter,pointSelecter:this.pointSelecter,className:this.state.gridClassName}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(N,{path:this.state.path})]})}}]),r}(i.Component),M=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,32)).then((function(e){var r=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;r(t),n(t),i(t),a(t),c(t)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),M()}},[[31,1,2]]]);
//# sourceMappingURL=main.22d41fbc.chunk.js.map