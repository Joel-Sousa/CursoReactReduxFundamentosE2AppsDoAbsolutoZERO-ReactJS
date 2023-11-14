import React from 'react';
import DiretaFilho from './DiretaFilho';

export default function DiretaPai(props) {
    return (
        <div>
            <DiretaFilho
                nome='Ana'
                idade={20}
                nerd={true}
            />

            <DiretaFilho
                nome='Alice'
                idade={20}
                nerd={false}
            />
        </div>
    )
}