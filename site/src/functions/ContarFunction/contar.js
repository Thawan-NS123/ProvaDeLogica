export async function contarAte(inicio, fim){
    let arr = []

    for(let i = inicio; i <= fim; i++)  
        arr.push(i)

    return arr;
}

//console.log(contarAte(2, 8))