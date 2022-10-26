export function MediaVetor(totalALunos){

    let soma = 0;

    for(let i = 0; i < totalALunos.length; i++) {

        soma += totalALunos[i];
        if(i == totalALunos.length - 1){
            soma = soma / totalALunos.length
        }
    }

    return soma
}

//console.log(MediaVetor([1,2,3,4,5,6,7,8,9,10]))