import React from 'react';
import './block.css';

let clickHandler = (props) => {
    var r;
    var L = props.gridLength;
    if (props.id < L) {
        r = 0;
    } else {
    r = Math.floor(props.id / L);
    }
     var c = props.id % L;

    var x = props.gridArr;
    if (x[r][c] !== "S") {
    if (props.startPointSelecter === 1) {
        x[r][c] = "S"
        props.changeBlock(x);
        props.pointSelecter([r, c]);
    } else {
        // if the value is equal to no wall then make it a wall
        if (props.gridArr[r][c] === "0") {
            x[r][c] = "1"
            props.changeBlock(x);
        }
        else {
            x[r][c] = "0"
            props.changeBlock(x);
        }
    }
}

};

export const Block = (props) => {
    var r;
    var L = props.gridLength;
    if (props.id < L) {
        r = 0;
    } else {
    r = Math.floor(props.id / L);
    }
     var c = props.id % L;

    if (props.gridArr[r][c] === "0") {
        if (props.colorScheme === 2) {
            return(
                <div id={props.id} onClick={() => clickHandler(props) }  className={props.className}></div>
            );
        } else {
            return(
                <div id={props.id} onClick={() => clickHandler(props) }  className={props.className}></div>
            );
        }

    }
    else if(props.gridArr[r][c] === "S" ||  props.gridArr[r][c] === "E"){
        if (props.colorScheme === 2) {
            return(
                <div id={props.id} onClick={() => clickHandler(props) }  className={`${props.className} blockColorOrange`}></div>
            );
        } else {
            return(
                <div id={props.id} onClick={() => clickHandler(props) } className={`${props.className} blockColorBlue`}></div>
            );
        }
    }
    else if(props.gridArr[r][c] === "V"){
        if (props.colorScheme === 2) {
            return(
                <div id={props.id} onClick={() => clickHandler(props) }  className={`${props.className} blockColorOcean`}></div>
            );
        } else {
        return(
            <div id={props.id} onClick={() => clickHandler(props) } className={`${props.className} blockColorYellow`}></div>
        );
        }
    }
    else if(props.gridArr[r][c] === "Solved"){
        if (props.colorScheme === 2) {
            return(
                <div id={props.id} onClick={() => clickHandler(props) }  className={`${props.className} blockColorPink`}></div>
            );
        } else {
        return(
            <div id={props.id} onClick={() => clickHandler(props) } className={`${props.className} blockColorGreen`}></div>
        );
        }
    }
    else {
        if (props.colorScheme === 2) {
            return(
                <div id={props.id} onClick={() => clickHandler(props) }  className={`${props.className} blockColorSalmon`}></div>
            );
        } else {
        return(
            <div id={props.id} onClick={() => clickHandler(props) } className={`${props.className} blockColorRed`}></div>
        );
        }
    }
}