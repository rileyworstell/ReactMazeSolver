import React from 'react';
import './button.css';
import { bfs } from '../../algorithms/BFS.js'
import { dfs } from '../../algorithms/DFS.js'

export const Button = (props) => {
    return(
    <button onClick={() => {
        if (props.clickDo === 'bfs') {
            if (props.path !== null) {
                props.recreateGrid(null, true);
            }else {
        bfs(props, props.gridArr, props.s, props.slowPathRun)
            }
        } else if (props.clickDo === 'dfs') {
            if (props.path !== null) {
                props.recreateGrid(null, true);
            }else {
        dfs(props, props.gridArr, props.s, props.slowPathRun)
            }
        } 
        else {
            props.recreateGrid();
        }
    }} className={props.className}>{props.text}
    </button>
    );
}