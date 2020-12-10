import React from 'react';
import './button.css';
import { bfs } from '../../algorithms/BFS.js'

export const Button = (props) => {
    return(
    <button onClick={() => {
        if (props.clickDo === 1) {
            if (props.path !== null) {
                props.recreateGrid();
            }else {
        bfs(props, props.gridArr, props.s, props.slowPathRun)
            }
        } else {
            props.recreateGrid();
        }
    }} className={props.className}>{props.text}
    </button>
    );
}