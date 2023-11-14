import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
    return (
        <Layout titulo='usando componente'>
            <h1>Exemplo</h1>
            <Cabecalho nome='ana' idade='19' titulo='este e um titulo'/>
        </Layout>
    )
}