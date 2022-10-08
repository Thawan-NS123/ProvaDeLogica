import './Sorveteria.css'
import '../../common.css'
import { useState } from "react";
import { SorveteriaFunction } from '../../functions/SorveteriaFunction/index'
import { Link } from 'react-router-dom';

export default function Sorveteria(){

    const [gramas, setGramas] = useState(0);
    const [vlTotal, setVlTotal] = useState(0);
    

    async function sorveteria(){
        const resposta = await SorveteriaFunction(gramas)
        setVlTotal(resposta)
    }

    function reset(){
        setGramas('')
    }

    return(

        <section>
          <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
          <h1 className="Titulo-Sorveteria">Sorveteria</h1>

            <div className='Fundo'>
                <div> 
                    <label> Digite o valor em gramas:</label>
                    <input type="number" 
                           value={gramas} 
                           onChange={e => setGramas(e.target.value)}
                           onClick={reset}/>
                </div>

                <div className='resul-button'>
                    <div>
                        <button className='butao-sorv' onClick={sorveteria}> Concluir Compra</button>
                    </div>
                    <div className='Resultado'>
                        R${vlTotal}
                    </div>
                </div>
            </div>
        </section>

    )
}