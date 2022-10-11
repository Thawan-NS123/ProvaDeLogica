import './Abaste.css'
import '../../common.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { QtdAbastecimento } from '../../functions/ParadasParaAbasFunction/abastecimento'

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
            <h1 className='Titulo-Abastecimento'>Qtd Abastecimento</h1>
            <div className='Fundo'>  
                <div>
                    <label>Informe a Capacidade do Veículo:</label>
                     <input 
                        type="number" 
                        value={capacidade}
                        onChange={e => setCapacidade(e.target.value)}/> 
                </div>

                <div>
                    <label>Informe a Quantidade de Consumo:</label>
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
                        onChange={e => setDistancia(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' ? QtdAbas() : ''}/>
                </div>
                <div className='resul-button'>
                    <div>
                        <button className='butao-calc' onClick={QtdAbas}>Calcular</button> 
                    </div>

                    <div className='Resultado-N'>
                       Vezes para Abastecer {resposta}
                    </div>
                </div>
            </div>
            
        </section>
    )
}