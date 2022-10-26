import './index.css'
import '../../common.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function QtdAluno(){
    
    const [qtd, setQtd] = useState(0);
    const [notasAlunos, setNotasAlunos] = useState([])
  
    const [media, setMedia] = useState(0);
    const [maior, setMaior] = useState(0);
    const [menor, setMenor] = useState(0);


    //console.log(aaa(10));

    
    return(
        <section>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1 className='Titulo-Salario'>Salario</h1>
            <div className='Fundo'>  
                <div>
                    <label>Informe a quantidade de alunos:</label>
                    <input
                        type="number"
                        value={qtdAluno}
                        onChange={e => setQtdAluno(e.target.value)}/>
                </div>


                <div className='resul-button'>
                    <div>
                        <button className='butao-calc-salario' onClick={calcAlunos}>Calcular</button> 
                    </div>

                    <div className='Resultado-N'>
                       
                    </div>
                </div>
            </div>
            
        </section>
    )
}