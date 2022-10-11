import './index.css'
import '../../common.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { situacaoFebre } from '../../functions/TemperaturaFuction'

export default function TemperaturaHoje(){


    const [temperatura, setTemperatura] = useState()
    const [resposta, setResposta] = useState();

    async function SituFebre(){
        const r = await situacaoFebre(temperatura)

        if(r <= 0){
          return
        }
        setResposta(r);
    }

    return(
        <section>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1>Temperatura</h1>
            <div className='Fundo'>  
                <div>
                    <label>Digite sua temperatura:</label>
                    <input type="number" value={temperatura} 
                           onChange={e => setTemperatura(e.target.value)}/>
                </div>


                <div className='resul-button'>
                    <div>
                        <button className='butao-calc' onClick={SituFebre}>Calcular</button> 
                    </div>

                    <div className='Resultado'>
                        A situação para sua temperatura é: {resposta}
                    </div>
                </div>
            </div>
            
        </section>
    )
}