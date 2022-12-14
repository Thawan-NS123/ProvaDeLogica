import './Acai.css'
import '../../common.css'
import { useState } from "react";
import { calcularTotalFunction } from '../../functions/AcaiFunction/Acai'
import { Link } from 'react-router-dom';

export default function Acai(){

  const [qtdPequena, setQtdPequena] = useState(0)
  const [qtdMedia, setQtdMedia] = useState(0)
  const [qtdGrande, setQtdGrande] = useState(0)
  const [vlDesc, setVlDesc] = useState(0)
  const [vlFinal, setVlFinal] = useState(0)

   async function calcularTotal(){
    const resposta = await calcularTotalFunction(qtdPequena, qtdMedia, qtdGrande, vlDesc)

      if(resposta < 0){
        return
      }

     setVlFinal(resposta)
   }

    return(

      <section>
        <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
        <h1 className='Titulo-Acai'>Loja de Açai</h1>
        <div className='Acai Fundo'>  
            <div>
              <label>Digite quantos açais pequenos deseja:</label>
              <input 
                  type="number"
                  value={qtdPequena} 
                  onChange={e => setQtdPequena(e.target.value)}/>
            </div>

            <div>
              <label>Digite quantos açais médios deseja:</label>
              <input 
                  type="number"
                  value={qtdMedia}
                  onChange={e => setQtdMedia(e.target.value)}/>
            </div>

            <div>
              <label>Digite quantos açais grandes deseja:</label>
              <input 
                  type="number"
                  value={qtdGrande} 
                  onChange={e => setQtdGrande(e.target.value)}/>
            </div>

            <div>
              <label>Digite qual o valor de desconto:</label>
              <input 
                  type="number"
                  value={vlDesc} 
                  onChange={e => setVlDesc(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' ? calcularTotal() : ''}/>%
            </div>

            <div className='resul-button'>
              <div>
                <button className='butao-calc-acai' onClick={calcularTotal}>Calcular</button> 
              </div>

              <div className='Resultado-N'>
                R$ {vlFinal}
              </div>
            </div>
        </div>

      </section>

    )
}