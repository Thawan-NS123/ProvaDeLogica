import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Acai from './page/Acai/index'
import Signo from './page/Signo/index'
import Sorveteria from './page/Sorveteria/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/Acai/0710" element={<Acai/>} />
        <Route path="/Signo/0710" element={<Signo/>} />
        <Route path="/Sorveteria/0710" element={<Sorveteria/>} />
      </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>
);

