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

 console.log(Cafezin(15, 3, 250));


 // for (let i = 2; 2 <= 3; i++){
 //let y = i + 3 
 // return y | y = 6
 //}
 // console.log(Cafezin(1, 2, 3000));
 //6



 //for (let i = 3; 3 <= 3.75; i++){
 //
 // 
 //}
 // console.log(Cafezin(15,3,250);
 //6