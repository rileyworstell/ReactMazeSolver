import React from 'react';
import './path.css';


export const Path = (props) => {
    if (props.path) {
        var x = "";
       for (var i = 0; i < props.path.length; i++) {
           x = x + ("[" + props.path[i].toString() + "]");
       }
       return(
        <div>Your Path: {x}</div>
        );
        
    }else {
    return(
    <div></div>
    );
    }
}