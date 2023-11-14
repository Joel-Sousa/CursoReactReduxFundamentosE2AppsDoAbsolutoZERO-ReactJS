import React from 'react';

export default function IndiretaFilho(props){
    const recebePai = props.quandoClicar;

    const gerarIdade = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    return(
        <div>
            Filho-
            <button onClick={() => recebePai('pedro', gerarIdade(10, 20), true)}>Mandar</button>
        </div>
    )
}