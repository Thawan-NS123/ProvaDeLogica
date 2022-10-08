import './Acai.css'
import { useState } from "react";

export default function Acai(){

  const [qtdPequena, setQtdPequena] = useState(0)
  const [qtdMedia, setQtdMedia] = useState(0)
  const [qtdGrande, setQtdGrande] = useState(0)
  const [vlDesc, setVlDesc] = useState(0)
  const [vlFinal, setVlFinal] = useState(0)


  // async function calcTotal(){
  //   const resposta = await calcularTotal(qtdPequena, qtdMedia, qtdGrande, vlDesc)
  //   setVlFinal(resposta)
  // }
    
    function calcularTotal(){

      if(qtdPequena < 0 || qtdMedia < 0 || qtdGrande < 0 || vlDesc < 0 ){
        alert('Valor negativo não é permitido')
      }
  
      let total = (qtdGrande * 17.50 + qtdMedia * 15.00 + qtdPequena * 13.50) * (vlDesc / 100 - 1) 
      total =  Math.abs(total)
      
      setVlFinal(total)
    }
    

    return(

      <section>
        <h1 className='Titulo-Acai'>Loja de Açai</h1>
        <div className='Acai Fundo'>  
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
            <div className='resul-button'>
              <div>
                <button className='butao-calc' onClick={calcularTotal}>Calcular</button> 
              </div>

              <div className='Resultado'>
                R$ {vlFinal}
              </div>
            </div>
        </div>

      </section>

    )
}