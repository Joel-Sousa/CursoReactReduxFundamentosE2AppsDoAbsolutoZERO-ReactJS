import React from 'react';

export default function DiretaFilho(props){
    return(
        <div>
            <span>{props.nome}</span>
            <span> <b>{props.idade}</b> </span>
            <span>{props.nerd ? 'Verdadeiro' : 'Falso'}</span>
        </div>
    )
}