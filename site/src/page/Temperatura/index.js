import './index.css'
import '../../common.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { situacaoFebre } from '../../functions/TemperaturaFuction/temperatura'

export default function TemperaturaHoje(){

    const [temperatura, setTemperatura] = useState()
    const [resposta, setResposta] = useState('---');

    async function SituFebre(){
        const r = await situacaoFebre(temperatura);
        setResposta(r);
    }

    return(
        <section>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1 className='Titulo-Temp'>Temperatura</h1>
            <div className='Fundo'>  
                <div>
                    <label>Digite sua temperatura:</label>
                    <input 
                        type="number" 
                        value={temperatura} 
                        onChange={e => setTemperatura(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' ? SituFebre() : ''}/>
                </div>


                <div className='resul-button'>
                    <div>
                        <button className='butao-calc-temp' onClick={SituFebre}>Calcular</button> 
                    </div>

                    <div className='Resultado-S'>
                        Situação: {resposta}
                    </div>
                </div>
            </div>
            
        </section>
    )
}