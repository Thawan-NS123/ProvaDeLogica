export async function MediaVetor(totalALunos){

    let soma = 0;

    for(let i = 0; i < totalALunos.length; i++) {

        soma += totalALunos[i];
        if(i == totalALunos.length - 1){
            soma = soma / totalALunos.length
        }
    }

    return soma
}