import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';
import { corAleatoria } from './Util/Util'

import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  return (
    <div className='App'>
      <h1 style={{ color: corAleatoria() }} className='Titulo'>Exercicios React-redux(Simples)</h1>
      <div className="linha">
        <Intervalo min={min} max={max} 
          setMin={setMin} setMax={setMax}></Intervalo>
      </div>

      <div className="linha">
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>

    </div>
  );
}

export default App;
