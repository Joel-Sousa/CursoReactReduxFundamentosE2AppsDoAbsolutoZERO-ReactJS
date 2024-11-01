import './Intervalo.css';
import React, {useState} from 'react';
import Card from './Card';
import {connect} from 'react-redux';
import {alterarNumeroMinimo, alterarNumeroMaximo} from '../store/actions/numeros';

const Intervalo = props => {

    const {min, max} = props;
    // props.alterarMinimo(1000);

    return (
        <Card title='Intervalo de numeros' red>
                <div className='Intervalo'>
                <span>
                    <strong>Minimo: </strong>
                    <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)}/>
                    
                </span>
                <span>
                    <strong>Maximo: </strong>
                    <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)}/>
                </span>
        </div>
            </Card>
    )
}

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProp(dispatch){
    return{
        alterarMaximo(novoNumero){
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action)

        },
        alterarMinimo(novoNumero){
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);