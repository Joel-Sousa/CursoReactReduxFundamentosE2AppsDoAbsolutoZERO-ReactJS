import React, {useState} from 'react';
import './Input.css'

export default function Input(){

    const [valor, setValor] = useState('');
    
    return(
        <div className='input'>
            Input={valor}
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <input value={valor} onChange={(e) => setValor(e.target.value)}/>
            <input value={valor} readOnly/>
            <input value={undefined} />
            </div>
        </div>
    )
}