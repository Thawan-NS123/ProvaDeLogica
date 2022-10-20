// import './index.css'
// import '../../common.css'
// import { useState } from "react";
// import { Cafe } from '../../functions/CafezinhoFunction/caje'
// import { Link } from 'react-router-dom';

// export default function QueroCafe(){
//   const [qtdAlunos, setQtdAlunos] = useState(0)
//   const [capacidade, setCapacidade] = useState(0)
//   const [qtdMililitros, setQtdMililitros] = useState(0)
//   const [resultado, setResultado] = useState(0)

//    async function calcCafe(){
//     const resposta = await Cafe(qtdAlunos, capacidade, qtdMililitros)
//      setResultado(resposta)
//    }

//     return(

//       <section>
//         <Link className='Link-Voltar' to='/'> &lsaquo; voltar</Link>
//         <h1 className='Titulo-Acai'>Cafézinho</h1>
//         <div className='Acai Fundo'>  
//             <div>
//               <label>Informe a quantidade de alunos:</label>
//               <input 
//                   type="number"
//                   value={qtdAlunos} 
//                   onChange={e => setQtdAlunos(e.target.value)}/>
//             </div>

//             <div>
//               <label>Informe a capacidade da garrafa:</label>
//               <input 
//                   type="number"
//                   value={capacidade}
//                   onChange={e => setCapacidade(e.target.value)}/>
//             </div>

//             <div>
//               <label>Informe a qtd. de litro em mililitros de consumo p/ aluno:</label>
//               <input 
//                   type="number"
//                   value={qtdMililitros} 
//                   onChange={e => setQtdMililitros(e.target.value)}
//                   onKeyPress={e => e.key === 'Enter' ? calcularTotal() : ''}/>
//             </div>

//             <div>
//               <label>Digite qual o valor de desconto:</label>
//               <input 
//                   type="number"
//                   value={vlDesc} 
//                   onChange={e => setVlDesc(e.target.value)}
//                   />%
//             </div>

//             <div className='resul-button'>
//               <div>
//                 <button className='butao-calc-acai' onClick={calcCafe}>Calcular</button> 
//               </div>

//               <div className='Resultado-N'>
//                 {resultado}
//               </div>
//             </div>
//         </div>

//       </section>

//     )
// }