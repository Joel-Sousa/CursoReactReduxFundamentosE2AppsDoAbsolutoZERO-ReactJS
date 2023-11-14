import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';
import { corAleatoria } from './Util/Util'

import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {

  return (
    <div className='App'>
      <h1 style={{ color: corAleatoria() }} className='Titulo'>Exercicios React-redux(Simples)</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>

      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>

    </div>
  );
}

export default App;
