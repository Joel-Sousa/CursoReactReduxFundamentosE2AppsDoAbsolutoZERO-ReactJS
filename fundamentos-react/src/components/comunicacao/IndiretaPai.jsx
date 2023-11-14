import React, {useState} from 'react';
import IndiretaFilho from './IndiretaFilho';

export default function IndiretaPai(){

const initialState = {
    nome: '?',
    idade: 0,
    nerd : false
}

    const [state, setState] = useState(initialState);

    const mandaFilho = (nome, idade, nerd)=>{
        
        setState({...state, nome: nome, idade, nerd});
    };

    const {nome, idade, nerd} = state;
    
    return(
        <div>
            Pai={nome}-{idade}-{nerd ? 'Verdadeiro' : 'Falso'}
            <IndiretaFilho quandoClicar={mandaFilho}></IndiretaFilho>
        </div>
    )
}