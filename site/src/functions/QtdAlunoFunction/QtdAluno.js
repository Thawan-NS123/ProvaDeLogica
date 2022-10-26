
 export function menorVetor(notas){

    let menor = 11;
    for (let i = 0; i < notas.length; i++){
        if (notas[i] < menor )
            menor = notas[i];
    }
    return menor
}

console.log(menorVetor([1,2,3,4,5,6,7,8,9,10]));