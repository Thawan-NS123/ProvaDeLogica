import './index.css'
import '../../common.css'
import { Link } from 'react-router-dom'

export default function Teste1(){
    return(
        <section>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1>Teste1</h1>
            <div className='Fundo'>  
                <div>
                    <label>Digite quantos açais pequenos deseja:</label>
                    <input type="number"/>
                </div>

                <div>
                    <label>Digite quantos açais médios deseja:</label>
                    <input type="number"/>
                </div>

                <div>
                    <label>Digite quantos açais grandes deseja:</label>
                    <input/>
                </div>

                <div>
                    <label>Digite qual o valor de desconto:</label>
                    <input type="number"/>
                </div>

                <div className='resul-button'>
                    <div>
                        <button className='butao-calc'>Calcular</button> 
                    </div>

                    <div className='Resultado'>
                        R$ 000
                    </div>
                </div>
            </div>
            
        </section>
    )
}