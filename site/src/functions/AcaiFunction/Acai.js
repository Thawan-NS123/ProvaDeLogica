export async function calcularTotalFunction(qtdPequena, qtdMedia, qtdGrande, vlDesc){

    if(qtdPequena < 0 || qtdMedia < 0 || qtdGrande < 0 || vlDesc < 0 ){
      return 0
    }
    

    let total = (await qtdGrande * 17.50 + qtdMedia * 15.00 + qtdPequena * 13.50) * (vlDesc / 100 - 1)   

    return(Math.abs(total))
}