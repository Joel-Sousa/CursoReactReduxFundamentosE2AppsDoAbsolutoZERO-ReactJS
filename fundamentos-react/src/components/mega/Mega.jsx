import React, { useState, useEffect } from 'react';
import {gerar, gerar1} from '../../Utils/Util';

export default function Mega() {

    const [quantidade, setQuantidade] = useState(6);
    const [numerosMega1, setNumerosMega1] = useState([]);

    return (
        <>
            <h2>Numeros da mega Sena</h2>
            Numeros Aleatorios: <br /> {numerosMega1.join(', ')} <br />

            <input value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />

            <button onClick={() => setNumerosMega1(gerar(+quantidade))}>Gerar</button>
        </>
    )
}
