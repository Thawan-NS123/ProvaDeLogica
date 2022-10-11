import './index.css'
import '../../common.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { QtdAbastecimento } from '../../functions/ParadasParaAbasFunction'

export default function Abastecimento(){

    const [ capacidade, setCapacidade ] = useState(0)
    const [ consumo, setConsumo ] = useState(0)
    const [ distancia, setDistancia ] = useState(0)
    const [ resposta, setResposta ] = useState(0)



    async function QtdAbas(){

         const r = await QtdAbastecimento(capacidade, consumo, distancia);
         setResposta(r)
    }

    return(
        <section>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1>Qtd Abastecimento</h1>
            <div className='Fundo'>  
                <div>
                    <label>Informe a Capacidade do Veículo:</label>
                     <input 
                        type="number" 
                        value={capacidade}
                        onChange={e => setCapacidade(e.target.value)}/> 
                </div>

                <div>
                    <label>Informe a Qtd de Consumo:</label>
                    <input
                        type="number" 
                        value={consumo}
                        onChange={e => setConsumo(e.target.value)}/>
                </div>

                <div>
                    <label>Informe a Distância que será percorrida:</label>
                    <input
                        type="number" 
                        value={distancia}
                        onChange={e => setDistancia(e.target.value)}/>
                </div>
                <div className='resul-button'>
                    <div>
                        <button className='butao-calc' onClick={QtdAbas}>Calcular</button> 
                    </div>

                    <div className='Resultado'>
                       Você precisará fazer {resposta} paradas para abastecer.
                    </div>
                </div>
            </div>
            
        </section>
    )
}