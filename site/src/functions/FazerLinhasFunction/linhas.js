export async function linhas(qtdPontos){
    let array = []

    for(let i = 0; i < qtdPontos; i++){ 
        let asterisco = '*'
        array.push( `${asterisco}`);
    }
    
    return array;
}

console.log(linhas(5))