import { Link } from 'react-router-dom'
import { useState } from 'react';
import { contarAte } from '../../functions/ContarFunction/contar'

export default function ContarAteNum(){

const [inicio, setInicio] = useState (0)
const [fim, setFim ] = useState (0)
const [resul, setResul ] = useState([]);

async function contarNum(){
    const y = await contarAte(inicio,fim)
    setResul(y)
}

    return(
        <section>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1 className='Titulo-Abastecimento'>Contar até</h1>
            <div className='Fundo'>  
                <div>
                    <label>Informe o primeiro valor</label>
                     <input value={inicio} onChange={e => setInicio(e.target.value)}/> 
                </div>
                <div>
                    <label>Informe o segundo valor</label>
                     <input value={fim} onChange={e => setFim(e.target.value)}/> 
                </div>
                <div className='resul-button'>
                    <div>
                        <button className='butao-calc'onClick={contarNum}>Calcular</button> 
                    </div>

                    <div className='Resultado-N'>
                       {resul}
                    </div>
                </div>
            </div>
            
        </section>
    )
}