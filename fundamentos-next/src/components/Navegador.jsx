import Link from "next/link";
import styles from '../styles/Navegador.module.css';

export default function Navegador(props) {

    const estilo = {
        backgroundColor : props.cor ?? 'blue',
        border: '1px solid black',
        textShadow: '0px 0px 5px black',
        // webkitTextStroke: '1px red',
        // fontWeight: 'bold',
    }

    return (
        <div className={styles.navegador} 
            style={estilo} >
            <Link href={props.destino}>{props.texto}</Link>
        </div>
    )
}