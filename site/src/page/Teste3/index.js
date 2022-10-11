import './index.css'
import '../../common.css'
import { Link } from 'react-router-dom'

export default function Salario(){
    
    return(
        <section>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1 className='Titulo-Salario'>Teste3</h1>
            <div className='Fundo'>  
                <div>
                    <label>Digite seu salário:</label>
                    <input
                        type="number"/>
                </div>

                <div>
                    <label>Digite seu bonus mensal:</label>
                    <input 
                        type="number"/> 
                </div>

                <div>
                    <label>Digite o total de descontos:</label>
                    <input 
                        type="number"/>
                </div>


                <div className='resul-button'>
                    <div>
                        <button className='butao-calc-salario'>Calcular</button> 
                    </div>

                    <div className='Resultado-N'>
                       Salário liquido de R$ 
                    </div>
                </div>
            </div>
            
        </section>
    )
}