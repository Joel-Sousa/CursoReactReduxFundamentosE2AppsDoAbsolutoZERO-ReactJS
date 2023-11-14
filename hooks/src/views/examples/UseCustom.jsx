import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import {useCounter} from '../../hooks/useCounter';
import {useFetch} from '../../hooks/useFetch';

const UseRef = (props) => {
    const [count, inc, dec] = useCounter();
    const url = 'http://files.cod3r.com.br/curso-react/estados.json';
    const response = useFetch(url);
    
    function showStates(states){
        return states.map((e, i) => <li key={i}>{e.nome}-{e.sigla}</li>)
    }
    
    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
        
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div className="text">
                    {count}
                </div>
                <div>
                    <button className="btn" onClick={() => dec()}>-</button>
                    <button className="btn" onClick={() => inc()}>+</button>
                </div>
            </div>
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <ul>
                            {(!response.loading) ? showStates(response.data) : ''}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
