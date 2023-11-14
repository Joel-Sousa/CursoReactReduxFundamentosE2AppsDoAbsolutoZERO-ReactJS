import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(n) {
    const num = parseInt(n);
    if (num < 0) return -1;
    if (num === 0) return 1;

    return calcFatorial(num - 1) * num;
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(0);
    const [fatorial, setFatorial] = useState(1);
    const [status, setStatus] = useState('');

    useEffect(() => {
        setFatorial(calcFatorial(number))

        const isPar = number % 2 === 0 ? 'Par' : 'Impar';
        setStatus(isPar);

    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title='Exercicio #01' />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Nao existe' : fatorial}</span>
                </div>
                <p>{number}</p>
                <input type="number" value={number}
                    onChange={(e) => setNumber(e.target.value)} />
            </div>
            <SectionTitle title='Exercicio #02' />
            <div className="center">
                <div>
                    <span className='text'>Status: </span>
                    <span className='text red'>{status}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
