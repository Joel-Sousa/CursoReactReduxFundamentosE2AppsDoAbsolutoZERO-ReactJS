import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons';

const UseCallback = (props) => {

    const [count, setCount] = useState(0);

    const inc = ((delta) =>{
        setCount(count + delta);
    })

    // function inc(delta) {
    //     setCount(count + delta);
    // }

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>

        </div>
    )
}

export default UseCallback
