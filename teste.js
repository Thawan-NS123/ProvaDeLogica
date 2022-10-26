function calcMenor(notas) {
    let m = 11;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < m) {
            m = notas[i];
        }
    }
    
    return m;
}

console.log(calcMenor([1,2,3,4,5,6,7,8,9,10]))