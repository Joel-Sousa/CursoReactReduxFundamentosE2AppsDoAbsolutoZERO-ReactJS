import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {
    const [numero, setNumero] = useState(0)

    return (
        <Layout titulo='Componente com estado'>
            <span>{numero}</span>
            <div>
                <button onClick={() => setNumero(numero - 1)}>-</button>
                <button onClick={() => setNumero(numero + 1)}>+</button>
            </div>
        </Layout>
    )
}