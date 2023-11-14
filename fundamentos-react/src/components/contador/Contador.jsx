import React, {Component} from 'react';
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

class Contador extends Component{

    state = {
        numero: this.props.numeroInicial,
        passo: this.props.numeroInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) =>{
        this.setState({
            passo: novoPasso,
        })
    }

    render(){
        return(
            <div>
                <h2>Contador</h2>
                    <PassoForm passo={this.state.passo}/>
                <br/>

                 <Display numero={this.state.numero}/>
                 <Botoes inc={this.inc} dec={this.dec} setPasso={this.setPasso}/>
                
            </div>
        )
    }
}

export default Contador;