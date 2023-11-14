import Layout from "../components/Layout"

export default function Jsx() {

    const titulo = <h1> Jsx conceito</h1>

    function subtitulo() {
        return <h2>{'muito legal. '.toUpperCase()}</h2>
    }

    return (
        <Layout titulo='Entendendo o jsx'>
            {titulo}
            Jsx e um conceito1
            {subtitulo()}
            {JSON.stringify({ nome: 'ana' })}
        </Layout>
    )
}