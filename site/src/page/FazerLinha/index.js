import { useState } from "react"
import { Link } from "react-router-dom"
import { linhas } from "../../functions/FazerLinhasFunction/linhas"

export default function FormarLinha(){

    const [ qtdPontos, setQtdPontos ] = useState(0)
    const [ resultado, setResultado ] = useState([])

    async function montarLinha(){
        const r = await linhas(qtdPontos)
        setResultado(r)
    }

    // ●
    return(
        <section>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1 className='Titulo-Abastecimento'>Fazer Linhas</h1>
            <div className='Fundo'>  
                <div>
                    <label>Informe o tamanho da linha:</label>
                     <input 
                        type="number" 
                        value={qtdPontos}
                        onChange={e => setQtdPontos(e.target.value)}/> 
                </div>
                <div className='resul-button'>
                    <div>
                        <button className='butao-calc' onClick={montarLinha}>Calcular</button> 
                    </div>

                    <div className='Resultado-N'>
                        {resultado}
                    </div>
                </div>
            </div>
            
        </section>
    )
}