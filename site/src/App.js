import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './common.css';

function App() {

  return (
    <main className="App common">
      <h1 className='Titulo-Prova'>Provas</h1>
      <ul className='Fundo'>
        <li><Link to='/Signo/0710'>Função do Signo</Link></li>
        <li><Link to='/Acai/0710'>Função do Açai</Link></li>
        <li><Link to='/Sorveteria/0710'>Função da Sorveteria</Link></li>
      </ul>
    </main>
  );
}

export default App;
