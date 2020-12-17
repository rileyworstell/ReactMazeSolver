import React from 'react';
import './color.css';

let changeScheme = (props) => {
    props.changeColor()
}

let changeGridSize = (props) => {
    props.changeSize()
}

export const Color = (props) => {
    if (props.elector === 1) {
    return(
    <button onClick={() => changeScheme(props)} className={'colorButton'}>{props.text}
    </button>
    );
    }
    else if (props.elector === 2) {
        return(
            <button onClick={() => changeGridSize(props)} className={'sizeButton'}>{props.text}
            </button>
            );
    }
}