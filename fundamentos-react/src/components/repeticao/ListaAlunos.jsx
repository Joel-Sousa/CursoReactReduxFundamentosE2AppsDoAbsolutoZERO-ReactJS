import React from 'react';
import {alunos} from '../data/alunos';

export default function ListaAlunos(props){

    let lista = alunos.map((e, i) =>{
         return <li key={i}> {e.id} - {e.nome} - {e.nota} </li>
    });
    
    return(
        <div>
            <ul>
                {lista}
            </ul>
        </div>
    )
}