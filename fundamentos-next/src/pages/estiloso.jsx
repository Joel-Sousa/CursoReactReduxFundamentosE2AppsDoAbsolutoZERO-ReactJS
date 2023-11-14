import style from '../styles/Estiloso.module.css';
import Layout from '../components/Layout';

export default function Estiloso() {

    return (
        <>
        <Layout titulo='exemplo de css modularizado'>
            <div className={style.vermelho}>Esta com estilo</div>
        </Layout>
        </>
    )
}