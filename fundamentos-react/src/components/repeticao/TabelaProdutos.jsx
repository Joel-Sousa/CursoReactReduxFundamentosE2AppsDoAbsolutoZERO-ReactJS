import React from 'react';
import { produtos } from '../data/produtos';
import './TabelaProdutos.css';

export default function TabelaProdutos() {

    const linhas = produtos.map((e, i) => {
        return (
            <tr key={i} className={i % 2 === 0 ? 'par' : 'impar'}>
                <td>{e.id}</td>
                <td>{e.nome}</td>
                <td>R$: {e.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        );
    });

    return (
        <div className='tabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {linhas}
                </tbody>
            </table>
        </div>
    )
}