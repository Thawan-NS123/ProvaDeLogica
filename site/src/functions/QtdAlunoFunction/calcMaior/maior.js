// export async function MaiorVetor(quantidade){
   
//     let maior = Math.min.apply(null, quantidade)
//     return maior;
// }

export function maiorVetor(notas){

    let maior = 0;
    for (let i = 0; i < notas.length; i++){
        if (notas[i] > maior )
            maior = notas[i];
    }
    return maior
}

console.log(maiorVetor([1,2,3,4,5,6,7,8,9,10]));