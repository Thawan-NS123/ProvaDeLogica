export async function QtdAbastecimento(capacidade, consumo, distancia){

    if(capacidade <= 0 || consumo <= 0 || distancia <= 0){
        return 0
    }

    let vlResul = await distancia / consumo / capacidade;
    
    return (Math.ceil(vlResul));
}