import React from 'react';
import './button.css';
import { bfs } from '../../algorithms/BFS.js'

export const Button = (props) => {
    return(
    <button onClick={() =>bfs(props, props.gridArr, props.s, props.slowPathRun)} className={props.className}>{props.text}
    </button>
    );
}