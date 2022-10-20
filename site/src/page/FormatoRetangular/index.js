import './index.css'
import '../../common.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { criarRetangulo, criarRetanguloCirc, criarRetanguloImage, criarRetanguloSquare } from '../../functions/RetanguloFunction/retangulo'

export default function Formato(){

    const [ base, setBase ] = useState(0)
    const [ colunas, setColunas ] = useState(0)
    
    const [ asterisco, setAsterisco ] = useState(false)
    const [ circle, setCircle ] = useState(false)
    const [ square, setSquare ] = useState(false)
    const [ imagem, setImagem] = useState (false)
    

    const [ resultado, setResultado ] = useState([])
    const [ resultado2, setResultado2 ] = useState([])
    const [ resultado3, setResultado3 ] = useState([])
    const [ resultado4, setResultado4 ] = useState([])

    async function formarRetangulo(){

        if (base < 0 || colunas < 0) {
            alert('Digite um valor absoluto')
            return ''
        }   

        if (base === colunas) {
        alert('Isto é um quadrado')
        return ''
        }

            if (asterisco === true){
                const r = await criarRetangulo(base, colunas)
                 setResultado(r);
            }
            else{
                setResultado([]);
            }
            if(circle === true){
                const r = await criarRetanguloCirc(base, colunas)
                setResultado2(r);
            }
            else{
                setResultado2([]);
            }
            if(square === true){
                const r = await criarRetanguloSquare(base, colunas)
                setResultado3(r);
            }
            else{
                setResultado3([]);
            }
                
            if(imagem === true){
                const r = await criarRetanguloImage(base, colunas)
                setResultado4(r);
            }
            else{
                setResultado4([]);
            }
    }
  
    
    return(
        <section>
            <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
            <h1 className='Titulo-Salario'>Criar Retângulos</h1>
            <div className='Fundo'>  
                <div>
                    <label>Informe a quantidades de linhas:</label>
                    <input
                        type="number"
                        value={base}
                        onChange={e => setBase(e.target.value)}/>
                </div>

                <div>
                    <label>Informe a quantidades de colunas:</label>
                    <input 
                        type="number"
                        value={colunas}
                        onChange={e => setColunas(e.target.value)}/>
                </div>
                <div className='espacos'>
                    <label>Asterisco</label>
                    <input className='radios inputam' type='checkbox' name='teste'
                    value={asterisco} onChange={e => setAsterisco(e.target.checked)}/>
                </div>
                <div className='espacos'>
                    <label>Círculo</label>
                    <input className='inputam' type='checkbox'  name='teste'
                    value={circle} onChange={e => setCircle(e.target.checked)}/>
                </div>
                <div className='espacos'>
                    <label>Quadrado</label>
                    <input className='inputam radios2' type='checkbox' name='teste'
                    value={square} onChange={e => setSquare(e.target.checked)}/>
                </div>
                <div>
                    <label>Imagem</label>
                    <input className='inputam radios3' type='checkbox' name='teste'
                    value={imagem} onChange={e => setImagem(e.target.checked)}/>
                </div>

                <div className='resul-button'>
                    <div>
                        <button className='butao-calc-salario' onClick={formarRetangulo}>Formar</button> 
                    </div>

                <div className='Resultado-N'>
                    {resultado}
                    {resultado2}
                    {resultado3}
                    {resultado4}
                </div>

                </div>
            </div>
            
        </section>
    )
}