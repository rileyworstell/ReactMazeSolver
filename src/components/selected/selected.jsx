import React from 'react';
import './selected.css';

let setStart = (props) => {
    console.log(props.startPointSelecter);
    props.pointSelecter()
}

export const Selected = (props) => {
    return(
    <button onClick={() => setStart(props)} className={props.className}>{props.text}
    </button>
    );
}