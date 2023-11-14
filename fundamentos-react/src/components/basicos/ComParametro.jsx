import React from 'react';

export default function ComParametro(props){

    const {titulo, subtitulo, nota } = props;
    
    return(
        <>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
            <h3>{nota}</h3>
        </>
    )
}