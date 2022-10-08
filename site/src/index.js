import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Acai from './page/Acai/index'
import Signo from './page/Signo/index'
import Sorveteria from './page/Sorveteria/index'
import Teste1 from './page/teste1';
import Teste2 from './page/teste2';
import Teste3 from './page/teste3';

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
        <Route path="/Teste1" element={<Teste1/>} />
        <Route path="/Teste2" element={<Teste2/>} />
        <Route path="/Teste3" element={<Teste3/>} />
      </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>
);

