import './index.css'
import '../../common.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { calcIngresso } from '../../functions/Cinema/cinema'

export default function Salario(){

    const [qtdInteiras, setQtdInteiras] = useState(0)
    const [qtdMeias, setQtdMeias] = useState(0)
    const [diaSemana, setDiaSemana] = useState('')
    const [nacional, setNacional] = useState(false)
    const [resposta, setResposta] = useState(0)

        async function calcularTotal(){
        const r = await calcIngresso(qtdInteiras, qtdMeias, diaSemana, nacional)
         setResposta(r)
     }

    return(
        <section>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1 className='Titulo-Cinema'>Cineminha</h1>
            <div className='Fundo'>  
                <div>
                    <label>Digite o total de Inteiras:</label>
                    <input
                        type="number"
                        value={qtdInteiras} 
                        onChange={e => setQtdInteiras( Number(e.target.value))}/>
                </div>

                <div>
                    <label>Digite o total de Meias:</label>
                    <input 
                        type="number"
                        value={qtdMeias} 
                        onChange={e => setQtdMeias(Number(e.target.value))}/> 
                </div>

                <div>
                    <label>Digite o Dia Da semana:</label>
                    <input 
                        type="text"
                        value={diaSemana} 
                        onChange={e => setDiaSemana(e.target.value)}/>
                </div>
                 <div>
                    <label>O Filme é Nacional:</label>
                    <input 
                        type="checkbox"
                        checked={nacional} 
                        onChange={e => setNacional(e.target.checked)}/>
                </div> 


                <div className='resul-button'>
                    <div>
                        <button className='butao-calc-salario' onClick={calcularTotal}>Calcular</button> 
                    </div>

                    <div className='Resultado-N'>
                        {resposta}
                    </div>
                </div>
            </div>
            
        </section>
    )
}