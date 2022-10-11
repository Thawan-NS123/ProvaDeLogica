import './Sorveteria.css'
import '../../common.css'
import { useState } from "react";
import { SorveteriaFunction } from '../../functions/SorveteriaFunction/index'
import { Link } from 'react-router-dom';

export default function Sorveteria(){

    const [gramas, setGramas] = useState(0);
    const [vlTotal, setVlTotal] = useState(0);
    

    async function Sorvete(){
        const resposta = await SorveteriaFunction(gramas)

        if(resposta < 0){
            return
        }

        setVlTotal(resposta)
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
                           onKeyPress={e => e.key === 'Enter' ? Sorvete() : ''}/>
                </div>

                <div className='resul-button'>
                    <div>
                        <button className='butao-sorv' onClick={Sorvete}> Concluir Compra</button>
                    </div>
                    <div className='Resultado-N'>
                        R${vlTotal}
                    </div>
                </div>
            </div>
        </section>

    )
}