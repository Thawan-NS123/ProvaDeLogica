import { Link } from 'react-router-dom';
import './App.css';
import './common.css';

function App() {

  return (
    <main className="App common">
      <h1 className='Titulo-Prova'>Provas</h1>
      <ul className='Fundo'>
        <li><Link to='/Signo'>Função do Signo</Link></li>
        <li><Link to='/Acai'>Função do Açai</Link></li>
        <li><Link to='/Sorveteria'>Função da Sorveteria</Link></li>
        <li><Link to='/Salario'>Função do Salário</Link></li>
        <li><Link to='/Temperatura'>Função da Temperatura</Link></li>
        <li><Link to='/Abastecimento'>Função do Abastecimento</Link></li>
        <li><Link to='/Cinema'>Função do Cinema</Link></li>
        <li><Link to='/SitOrcamento'>Função do Orçamento</Link></li> 
        <li><Link to='/contarAte'>Função Contar até</Link></li> 
        <li><Link to='/FormarLinhas'>Formar Linhas</Link></li>
        <li><Link to='/formatoRetangulo'>Formar Retângulo</Link></li>
        <li><Link to='/Cafe'>Função do Café</Link></li>
        <li><Link to="/qtdAluno">Função da Média</Link></li>
      </ul>
    </main>
  );
}

export default App;
