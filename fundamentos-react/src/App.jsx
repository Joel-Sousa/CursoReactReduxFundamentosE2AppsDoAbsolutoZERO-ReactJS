// import { corAleatoria } from './Utils/Util';
import { corAleatoria } from './Utils/Util';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

import './App.css';

export default function App() {
    return (
        <>
            <h1>Fundamentos</h1>
            <div className='cards'>

            <Card titulo={'#13 - Mega Sena'} color={corAleatoria()}>
                    <Mega/>
                </Card>

            <Card titulo={'#12 - Contador'} color={corAleatoria()}>
                    <Contador numeroInicial={0}/>
                </Card>

            <Card titulo={'#11 - Componente controlado (Input)'} color={corAleatoria()}>
                    <Input/>
                </Card>

            <Card titulo={'#10 - Comunicacao indireta'} color={corAleatoria()}>
                    <IndiretaPai/>
                </Card>

                <Card titulo={'#09 - Comunicacao direta'} color={corAleatoria()}>
                    <DiretaPai/>
                </Card>
                    
                <Card titulo={'#08 - Renderizacao condicional'} color={corAleatoria()}>
                    <ParOuImpar numero={20} />
                    <UsuarioInfo usuario={{nome: 'ana'}}/>
                    <UsuarioInfo usuario={{email: 'ana@email.com'}}/>
                    <UsuarioInfo usuario={{}}/>

                </Card>

                <Card titulo={'#07 - Tabela de produtos'} color={corAleatoria()}>
                    <TabelaProdutos />
                </Card>

                <Card titulo={'#06 - Repeticao'} color={corAleatoria()}>
                    <ListaAlunos />
                </Card>

                <Card titulo={'#05 - Componente com filhos'} color={corAleatoria()}>
                    {/* <Familia sobrenome='sousa'/> */}
                    <Familia sobrenome='sousa'>
                        <FamiliaMembro nome='ana' ></FamiliaMembro>
                        <FamiliaMembro nome='pedro'></FamiliaMembro>
                        <FamiliaMembro nome='julia'></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo={'#04 - Desafio aleatorio'} color={corAleatoria()}>
                    <Aleatorio minimo={1} maximo={5} />
                </Card>

                <Card titulo={'#03 - Fragmento'} color={corAleatoria()}>
                    <Fragmento />
                </Card>

                <Card titulo={'#02 - Com Parametro'} color={corAleatoria()}>
                    <ComParametro
                        titulo={'este e um titulo'}
                        subtitulo={'este e um subtitulo'}
                        nota={9.5}
                    />
                </Card>

                <Card titulo={'#01 - Primeiro'} color={corAleatoria()}>
                    <Primeiro tst='toto' />
                </Card>
            </div>
        </>
    )
}