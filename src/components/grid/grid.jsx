import React from 'react';
import './grid.css';
import { Block } from '../block/block.jsx'

export const Grid = (props) => {
    var arr = props.gridArr;
    var x = [];
    for (var i = 0; i < props.gridLength * props.gridLength; i++) {
      x.push(i);
    }
    return(
    <div className={props.className}>
      {/* The below creates the main grid with Blocks */}
      {x.map((x,index) => {
        return <Block s={props.s} pointSelecter={props.pointSelecter} startPointSelecter={props.startPointSelecter} gridLength={props.gridLength} changeBlock={props.changeBlock} gridArr={props.gridArr} className="block" key={index} id={index} />;
      })}
    </div>
    );
}
