import React from 'react';
import './Card.css';

export default function Card(props) {

    const cardEstilo = {
        backgroundColor: props.color || '#f00',
        borderColor: props.color || '#f00',
    };

    return (
        <div className='card' style={cardEstilo}>
            <div className='titulo'>{props.titulo}</div>
            <div className='conteudo' style={{padding: 5}}>{props.children}</div>
            {/* <hr/>
            <div className='conteudo'>{props.children.props.minimo}</div>
            <div className='conteudo'>{props.children.props.maximo}</div> */}
        </div>
    )
}
