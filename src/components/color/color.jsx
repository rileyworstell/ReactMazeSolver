import React from 'react';
import './color.css';

let changeScheme = (props) => {
    props.changeColor()
}

export const Color = (props) => {
    return(
    <button onClick={() => changeScheme(props)} className={'colorButton'}>{props.text}
    </button>
    );
}