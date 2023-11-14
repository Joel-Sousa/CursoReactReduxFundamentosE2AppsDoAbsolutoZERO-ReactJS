import './Intervalo.css';
import React from 'react';

import Card from './Card';

const Intervalo = props => {

    const {min, max} = props;
    
    return (
        <Card title='Intervalo de numeros' red>
                <div className='Intervalo'>
                <span>
                    <strong>Minimo: </strong>
                    <input type="number" value={min} onChange={(e) => props.setMin(+e.target.value)} />
                    
                </span>
                <span>
                    <strong>Maximo: </strong>
                    <input type="number" value={max} onChange={(e) => props.setMax(+e.target.value)} />
                </span>
        </div>
            </Card>
    )
}

export default Intervalo;