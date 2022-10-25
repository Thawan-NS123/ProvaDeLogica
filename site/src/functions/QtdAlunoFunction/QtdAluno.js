import { MaiorVetor } from './calcMaior/maior.js'
// import MenorVetor from './calcMenor/menor'
// import MediaVetor from './calcMedia/media.js'
// Somar Vetor
function calcularAlunos(qtdAluno){

    let quantidade = []
    for( let i = 1; i <= qtdAluno; i++  ){
        quantidade.push(i)
    }

    return quantidade
 
}

//console.log(calcularAlunos([1,2,3,4,5,6,7,8,9,10]))