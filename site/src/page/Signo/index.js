import './Signo.css'
import { useState } from "react";

export default function Signo(){

    const [dia, setDia ] = useState (0);
    const [mes, setMes]  = useState ('');
    const [resul, setResul] = useState (false);
    
    function Signo (){
   
        //mes = mes.toLowerCase()
    
        let reposta = false
       
        if (dia <= 0 || mes == Number) {
        throw new Error('Dia ou mês inválido');
       }
    
        if (mes == "setembro" && dia >= 23 && dia <= 30 || 
            mes == "outubro" && dia >= 1 && dia <=22){
              
              reposta = true
        }
           setResul(reposta)
      }
    

    return(

        <section className='Signo'>
            <h1 className='Titulo-Signo'> Seu Signo o é Libra? </h1>
            <div className='Fundo'>
                <div>
                    
                    <div>
                        <label>Digite o mês:</label>
                        <input type="text" value={mes} onChange={e => setMes(e.target.value)}/>
                    </div>

                    <div>  
                        <label>Digite o dia:</label>
                        <input type="number" value={dia} onChange={e => setDia(e.target.value)}/>
                    </div>

                    <div className='resul-button'>
                        <div>
                            <button onClick={Signo}> Checar </button> 
                        </div>
                        <div className='Resultado-Signo'> 
                            {resul === true ? 'Signo é Libras? Sim' : 'Signo é Libras? Não'}
                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}