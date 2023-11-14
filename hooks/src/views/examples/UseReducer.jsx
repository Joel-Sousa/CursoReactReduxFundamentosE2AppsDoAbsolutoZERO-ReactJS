import React, { useReducer, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

import {initialState, reducer} from '../../store';
import {numberAdd2, login, } from '../../store/actions';

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <SectionTitle title='Exercicio #01' />
            <div className='center'>
                <div className="text">{state.number}</div>
                <div className="text">{state.user ? state.user.name : 'Sem nome'}</div>
            </div>
            <div>
                <button className='btn' onClick={() => numberAdd2(dispatch)}>+</button>
                <button className='btn' onClick={() => login(dispatch, 'toto')}>login</button>
                <button className='btn' onClick={() => dispatch({ type: 'vezes7'})}>*7</button>
                <button className='btn' onClick={() => dispatch({ type: 'divididoPor25'})}>/25</button>
                <button className='btn' onClick={() => dispatch({ type: 'inteiro'})}>Inteiro</button>
                <button className='btn' onClick={() => dispatch({ type: 'addN', n: -100 })}>Add n -100</button>
                <button className='btn' onClick={() => dispatch({ type: 'addN', n: 100 })}>Add n 100</button>
            </div>
        </div>
    )
}

export default UseReducer
