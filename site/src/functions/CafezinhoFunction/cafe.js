function Cafezin(alunos, qtdCafe, litros){
    let CafeTotal = (alunos * litros) / 1000 // Convertendo em litros

    if (CafeTotal <= qtdCafe){
        return  qtdCafe;
    }

    else {
        for (let i = qtdCafe; i <= CafeTotal; i++){
            let y = i + qtdCafe;
                return y
        }
    }
   
}

 console.log(Cafezin(1, 2, 3000));


 // for (let i = 2; 2 <= 3; 2++){
 //let y = 2 + 3 
 // return y | y = 5
 //}
 // console.log(Cafezin(1, 2, 3000));
