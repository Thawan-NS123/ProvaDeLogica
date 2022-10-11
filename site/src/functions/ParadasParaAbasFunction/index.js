export async function QtdAbastecimento(capacidade, consumo, distancia){
    let vlResul = await distancia / consumo / capacidade;
    
    return (Math.ceil(vlResul));
}