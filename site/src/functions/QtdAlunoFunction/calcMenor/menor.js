// export async function MenorVetor(quantidade){
   
//     let menor = Math.max.apply(null, quantidade)
//     return menor;
// }

export function calcMenor(notas) {
    let m = 11;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < m) {
            m = notas[i];
        }
    }
    
    return m;
}