import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const mergeFrase = (frase1, frase2) => {
    let fraseJunta = '';

    for(let i=0; i<frase1.length+frase2.length; i++){
        fraseJunta += frase1[i] ?? '';
        fraseJunta += frase2[i] ?? ''; 
    }
    return fraseJunta;
}

const UseRef = (props) => {

    // pode usar o 'useRef' para pegar a referencia da propiedade e assim pegar seu valor com '.current' e mais

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);
    
    useEffect(() =>{
        count.current = count.current +1;
        myInput2.current.focus();
    }, [value1])
    
    useEffect(() =>{
        count.current = count.current +1;
        myInput1.current.focus();
    }, [value2])
    // count.current = count.current +1;
    

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title='Exercicio #01' />
            <div>
                <span className="text">Valor:</span>
                <span className="text">{mergeFrase(value1, value2)} [</span>
                <span className="text red">{count.current}</span>
                <span className="text">]</span>
            </div>

            <div className="center">
                <input ref={myInput1} type="text" className="input"
                    value={value1} onChange={(e) => setValue1(e.target.value)} />
            </div>

            <SectionTitle title='Exercicio #02'/>''
            <div className='center'>
                <input ref={myInput2} type="text" className="input" 
                    value={value2} onChange={(e) => setValue2(e.target.value)} />
            </div>

        </div>
        
    )
}

export default UseRef
