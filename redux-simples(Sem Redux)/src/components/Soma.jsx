import React from 'react';

import Card from './Card';

const Soma = props => {

    const {min, max} = props
    
    return (
        <Card title='Soma dos numeros' blue>
                <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min + max}</strong>
                </span>
                
        </div>
            </Card>
    )
}

export default Soma;