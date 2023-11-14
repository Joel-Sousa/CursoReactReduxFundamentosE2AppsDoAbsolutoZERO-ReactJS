import React from 'react';

export default function PassoForm(props){
    return(
        <>
            <input id='passoInput' 
                       type='number' 
                       value={props.passo}
                       onChange={e => props.setPasso(+e.target.value)}
                    />
        </>
    )
}