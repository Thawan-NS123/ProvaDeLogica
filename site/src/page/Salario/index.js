import './index.css'
import '../../common.css'
import { Link } from 'react-router-dom'
import { calcSalario } from '../../functions/CalcSalario/index.js'
import { useState } from 'react'

export default function Salario(){
    
    const [salario, setSalario] = useState ()
    const [bonus, setBonus] = useState ()
    const [desconto, setDesconto] = useState()
    const [vlFim, setVlFim] = useState(0)
    
    async function CalcularSalarioMensal (){
        const r = await calcSalario(salario, bonus, desconto)

        if(r < 0){
            return
        }

        setVlFim(r);
    }
    
    
    return(
        <section>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1>Salario</h1>
            <div className='Fundo'>  
                <div>
                    <label>Digite seu salário:</label>
                    <input type="number" value={salario} 
                  onChange={e => setSalario(e.target.value)}/>
                </div>

                <div>
                    <label>Digite seu bonus mensal:</label>
                    <input type="number" value={bonus} 
                  onChange={e => setBonus(e.target.value)}/> 
                </div>

                <div>
                    <label>Digite o total de descontos:</label>
                    <input type="number" value={desconto} 
                  onChange={e => setDesconto(e.target.value)}/>
                </div>


                <div className='resul-button'>
                    <div>
                        <button className='butao-calc' onClick={CalcularSalarioMensal}>Calcular</button> 
                    </div>

                    <div className='Resultado'>
                       Seu salário liquido é: R$ {vlFim}
                    </div>
                </div>
            </div>
            
        </section>
    )
}