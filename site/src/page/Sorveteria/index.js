import './Sorveteria.css'
import { useState } from "react";
import { Sorv } from '../../functions/SorveteriaFunction/index'

export default function Sorveteria(){

    const [gramas, setGramas] = useState(0);
    const [vlTotal, setVlTotal] = useState(0);
    

    async function sorveteria(){
        const resposta = await Sorv(gramas)
        setVlTotal(resposta)
    }

    return(

        <section>
          <h1 className="Titulo-Sorveteria">Sorveteria</h1>

            <div className='Fundo'>
                <div> 
                    <label> Digite o valor em gramas:</label>
                    <input type="number" value={gramas} onChange={e => setGramas(e.target.value)}/>
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