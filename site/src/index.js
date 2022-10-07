import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logica from './page/logica/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <logica />
  </React.StrictMode>
);

