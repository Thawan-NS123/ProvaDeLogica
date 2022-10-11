import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Acai from './page/Acai/index'
import Signo from './page/Signo/index'
import Sorveteria from './page/Sorveteria/index'
import Salario from './page/Salario';
import Temperatura from './page/Temperatura';
import Abastecimento from './page/ParadaParaAbas';
import Teste1 from './page/Teste1';
import Teste2 from './page/Teste2';
import Teste3 from './page/Teste3';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/Acai" element={<Acai/>} />
        <Route path="/Signo" element={<Signo/>} />
        <Route path="/Sorveteria" element={<Sorveteria/>} />
        <Route path="/Salario" element={<Salario/>} />
        <Route path="/Temperatura" element={<Temperatura/>} />
        <Route path="/Abastecimento" element={<Abastecimento/>} />
        {/* <Route path="/Teste1" element={<Teste1/>} /> */}
        {/* <Route path="/Teste2" element={<Teste2/>} /> */}
        {/* <Route path="/Teste3" element={<Teste3/>} /> */}
      </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>
);

