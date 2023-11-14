import React from 'react';
import {useParams} from 'react-router-dom';

export default function Param(){

    const {id} = useParams();
    
    return(
        <div className='Param'>
            <h1>Param</h1>
            <p>Valor: {id}</p>
        </div>
    )
}