import React from 'react';

export default function ParOuImpar(props){
    const numero = props.numero % 2 === 0 ? true : false
    return(
        <div>
            {(numero) ?
            <div>Par</div>
                :
            <div>Impar</div>
            }
        </div>
    )
}