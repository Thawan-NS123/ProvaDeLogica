import './index.css'
import '../../common.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {sitOrcamento} from '../../functions/SitOrcamentoFunction/Orcamento'


export default function Orcamento(){
    const [ganhos, setGanhos ] = useState (0);
    const [gastos, setGastos] = useState(0);
    const [resul, setResul] = useState(0);

    async function calcOrcamento(){
       const resposta = await sitOrcamento (ganhos, gastos)
       setResul(resposta);
    }


    return(
        <section>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1 className='Titulo-Salario'>Teste3</h1>
            <div className='Fundo'>  
                <div>
                    <label>Digite seus ganhos:</label>
                    <input
                        type="number" value={ganhos} 
                        onChange={e => setGanhos(e.target.value)}/>
                </div>

                <div>
                    <label>Digite seus gastos:</label>
                    <input 
                        type="number" value={gastos} 
                        onChange={e => setGastos(e.target.value)}/> 
                </div>


                <div className='resul-button'>
                    <div>
                        <button className='butao-calc-salario' onClick={calcOrcamento}>Calcular</button> 
                    </div>

                    <div className='Resultado-N'>
                       {resul}
                    </div>
                </div>
            </div>
            
        </section>
    )
}