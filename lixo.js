// let x = String.fromCharCode(10, 10)
// console.log(x);

function linhas(qtdPontos){
    let array = []

    for(let i = 0; i < qtdPontos; i++){ 
        array.push('*');
    }
    
    return array;
}

console.log(linhas(5))