import './index.css'
import '../../common.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function QtdAluno(){
    
    // const [qtdaluno, setQtdaluno ] = useState()



    // function alunos(){
    //     let quantidade = []
    //     for( let i = 1; i <= qtdAluno; i++  ){
    //         quantidade.push(i)
    //     }
    
    //     console.log(quantidade)
    //     //bbb(quantidade)
    
    // }
    
    // console.log(aaa(10));

    
    return(
        <section>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1 className='Titulo-Salario'>Salario</h1>
            <div className='Fundo'>  
                <div>
                    <label>Digite a quantidade de alunos:</label>
                    <input
                        type="number"/>
                </div>

                <div>
                    <label>Digite seu bonus mensal:</label>
                   
                    <input 
                        type="number"
                        /> 
                </div>

                <div>
                    <label>Digite o total de descontos:</label>
                    <input 
                        type="number" 
                        />
                </div>


                <div className='resul-button'>
                    <div>
                        <button className='butao-calc-salario' >Calcular</button> 
                    </div>

                    <div className='Resultado-N'>
                       Salário liquido de R$ 
                    </div>
                </div>
            </div>
            
        </section>
    )
}