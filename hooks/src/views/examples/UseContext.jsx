import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import { DataContext, data } from '../../data/DataContext';
import { AppContext } from '../../data/Store';

const UseContext = (props) => {

    const { state, setState } = useContext(DataContext);

    const tst = (n) => {
        setState({ ...state, number: state.number + n })
    }

    const {number, text, setNumber, setText} = useContext(AppContext);

    useEffect(() =>{
        if(number > 120) setText('eita');
    },[number])

    return (

        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title='Exercicio #01'/>
            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => tst(-1)}>-1</button>
                    <button className="btn" onClick={() => tst(1)}>+1</button>
                </div>
            </div>
            <SectionTitle title='Exercicio #02'/>
            <div className="center">
                <span className="text">{text}</span>
                <input type="text" className="center" 
                    value={text} onChange={(e) => setText(e.target.value)} />
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number -1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number +1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
