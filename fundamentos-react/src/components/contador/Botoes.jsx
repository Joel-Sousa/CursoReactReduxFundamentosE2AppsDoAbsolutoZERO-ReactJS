import React from 'react';

export default function Botoes(props){
    return(
        <>
            <button onClick={props.dec}>-</button>
            <button onClick={props.inc}>+</button>
        </>
    )
}