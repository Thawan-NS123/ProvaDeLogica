import './Signo.css'
import '../../common.css'
import { useState } from "react";
import { SignoFunction } from '../../functions/SignoFunction/Signo'
import { Link } from 'react-router-dom';

export default function Signo(){

    const [dia, setDia ] = useState (0);
    const [mes, setMes]  = useState ('');
    const [resul, setResul] = useState (false);

    async function SignoLibra(){
        const resposta = await SignoFunction(dia, mes)
        setResul(resposta) 
    }

    return(

        <section className='Signo'>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1 className='Titulo-Signo'> Seu Signo o é Libra? </h1>
            <div className='Fundo'>
                <div>
                    
                    <div>
                        <label>Digite o mês:</label>
                        <input 
                            type="text" 
                            value={mes} 
                            onChange={e => setMes(e.target.value)}/>
                    </div>

                    <div>  
                        <label>Digite o dia:</label>
                        <input 
                            type="number" 
                            value={dia} 
                            onChange={e => setDia(e.target.value)}
                            onKeyPress={e => e.key === 'Enter' ? SignoLibra() : ''}/>
                    </div>

                    <div className='resul-button'>
                        <div>
                            <button onClick={SignoLibra}> Checar </button> 
                        </div>
                        <div className='Resultado-Signo'> 
                            {resul === true ? 'Signo é Libras? Sim' : 'Signo é Libras? Não'}
                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}