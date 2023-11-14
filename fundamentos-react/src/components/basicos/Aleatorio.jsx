import React from 'react';

export default function Aleatorio(props){

    const {minimo, maximo} = props;

    const valorSorteado = Math.floor(Math.random() * (maximo - minimo) ) + minimo;
    return(
        <>
            <h2>Valor minimo: {minimo}</h2>
            <h2>Valor maximo: {maximo}</h2>
            <h2>Valor Sorteado: {valorSorteado}</h2>
        </>
    )
}