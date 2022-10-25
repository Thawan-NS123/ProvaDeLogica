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
import Cinema from './page/Cinema';
import SitOrcamento from './page/sitOrcamento';
import FormarLinha from './page/FazerLinha'
import ContarAte from './page/contarAte'
import Formato from './page/FormatoRetangular'
import QueroCafe from './page/Cafezinho'
import QtdAluno from './page/QtdAluno'

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
        <Route path="/Cinema" element={<Cinema/>} /> 
        <Route path="/SitOrcamento" element={<SitOrcamento/>} />
        <Route path="/FormarLinhas" element={<FormarLinha/>} /> 
        <Route path="/contarAte" element={<ContarAte/>} />
        <Route path="/formatoRetangulo" element={<Formato/>} />
        <Route path="/Cafe" element={<QueroCafe/>} />
        <Route path="/qtdAluno" element={<QtdAluno/>} />
      </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>
);

