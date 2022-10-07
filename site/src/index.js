import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Prova2 from './page/logica/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/prova/1410" element={<Prova2/>} />
      </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>
);

