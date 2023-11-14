import Navegador from '../components/Navegador';
import {corAleatoria} from '../Util/Util';

export default function Inicio(){
	
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'wrap',
			height: '100vh',
		}}>
			{/* <Navegador destino='/estiloso' texto='Estiloso' cor={'#fff'}/> */}
			<Navegador destino='/estiloso' texto='Estiloso' />
			<Navegador destino='/exemplo' texto='Exemplo' cor={corAleatoria()}/>
			<Navegador destino='/jsx' texto='Jsx' cor={corAleatoria()}/>
			<Navegador destino='/navegacao/' texto='Navegacao #01' cor={corAleatoria()}/>
			<Navegador destino='/cliente/go/123' texto='Navegacao dinamica' cor={corAleatoria()}/>
			<Navegador destino='/estado' texto='Estado' cor={corAleatoria()}/>
			<Navegador destino='/integracao_1' texto='Integraçao com api #01' cor={corAleatoria()}/>
			<Navegador destino='/estatico' texto='Conteudo estatico' cor={corAleatoria()}/>
		</div>
	);
}