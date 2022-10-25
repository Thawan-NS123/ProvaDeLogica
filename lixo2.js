// // Somar Vetor
//     function MediaVetor (){
//     let soma = 0
//     let ArmazTot = 0
//     let valor = [5,5,5]
//     for (let i in valor)  {
//         ArmazTot =  soma +=valor[i]
//     }
//     let mediaTot = ArmazTot / valor
    
//     return mediaTot;
//     }
    
//     console.log(MediaVetor());


// Pegar o maior valor
function MenorVetor(totalAlunos){
   
    let maior = Math.max.apply(null, totalAlunos)
    return maior;
}
    console.log(MenorVetor([1,12,13,14,15,16,17]));

// Pegar o menor valor    
function MenorVetor(totalAlunos){
   
    let maior = Math.min.apply(null, totalAlunos)
    return maior;
}
    console.log(MenorVetor([1,12,13,14,15,16,17]));

// Calcular media
function CalcularMedia(totalALunos){

    //let totalALunos = [tota];
    let soma = 0;

    for(let i = 0; i < totalALunos.length; i++) {

        soma += totalALunos[i];
        if(i == totalALunos.length - 1){
            soma = soma / totalALunos.length
        }
    }

    return soma
}

console.log(CalcularMedia([1,2,3,4,5,6,7,8,9,10]));

