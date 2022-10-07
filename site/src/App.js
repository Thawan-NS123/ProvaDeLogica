import { useState } from 'react';
import './App.css';

function App() {
// Variáveis de estado - Signo
  const [dia, setDia ] = useState (0);
  const [mes, setMes]  = useState ('');
  const [resul, setResul] = useState ('false');


// Variáveis de estado - CalcTotal
  const [qtdPequena, setQtdPequena] = useState(0)
  const [qtdMedia, setQtdMedia] = useState(0)
  const [qtdGrande, setQtdGrande] = useState(0)
  const [vlDesc, setVlDesc] = useState(0)
  const [vlFinal, setVlFinal] = useState(0)

// Variáveis de estado - Sorveteria
  const [gramas, setGramas] = useState(0);
  const [vlTotal, setVlTotal] = useState(0);

  //Função Calcular Açai
  function calcularTotal(){

    if(qtdPequena < 0 || qtdMedia < 0 || qtdGrande < 0 || vlDesc < 0 ){
      alert('Valor negativo não é permitido')
    }
  


    let total = (qtdGrande * 17.50 + qtdMedia * 15.00 + qtdPequena * 13.50) * (vlDesc / 100 - 1) 
    total =  Math.abs(total)
    
    setVlFinal(total)
  }

  //Função signo
  function Signo (){
   
    //mes = mes.toLowerCase()

    let sla = 'false'
   
    if (dia <= 0 || mes == Number) {
    throw new Error('Dia ou mês inválido');
   }

    if (mes == "setembro" && dia >= 23 && dia <= 30 || 
        mes == "outubro" && dia >= 1 && dia <=22){
          
          sla = 'true'
    }
       setResul(sla)
  }

  function sorveteria(){
     
    let valor = gramas * 3.50;

    if(gramas >= 1000){
      valor = Math.round(gramas * 3.00);
    }
    setVlTotal(valor / 100);
}


  return (
    <section className="App">
       <div>
          <h1> Signo </h1>
       <div>
          <label>Digite o mês:</label>
          <input type="text" value={mes} onChange={e => setMes(e.target.value)}/>
       </div>
       <div>  
          <label>Digite o dia:</label>
          <input type="number" value={dia} onChange={e => setDia(e.target.value)}/>
       </div>

       </div>
       <div>
          <button onClick={Signo}> Checar Signo Libra </button> 
      </div>
      <div> 
        {resul}
      </div>

      <div className='acai'>
            <div>
            <label>Digite quantos açais pequenos deseja:</label>
            <input type="number"
            value={qtdPequena} onChange={e => setQtdPequena(e.target.value)}/>
            </div>
           
            <div>
            <label>Digite quantos açais médios deseja:</label>
            <input type="number"
            value={qtdMedia} onChange={e => setQtdMedia(e.target.value)}/>
            </div>
            
            <div>
            <label>Digite quantos açais grandes deseja:</label>
            <input type="number"
            value={qtdGrande} onChange={e => setQtdGrande(e.target.value)}/>
            </div>

            <div>
            <label>Digite qual o valor de desconto:</label>
            <input type="number"
            value={vlDesc} onChange={e => setVlDesc(e.target.value)}/>
            </div>
       </div>
       <div>
          <button onClick={calcularTotal}>Concluir compra</button> 
      </div>
      <div>
        {vlFinal}
      </div>
          <label> Digite o valor em gramas:</label>
          <input type="number" value={gramas} onChange={e => setGramas(e.target.value)}/>
      <div>
      <div>
          <button onClick={sorveteria}> Concluir Compra</button>
      </div>
        <div>
            {vlTotal}
        </div>
      </div>
    </section>
  );
}

export default App;
