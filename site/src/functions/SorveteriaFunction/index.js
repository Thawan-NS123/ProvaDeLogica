
export async function Sorv(gramas){
    
    let valor = await gramas * 3.50;

    if(gramas >= 1000){
        valor = Math.round(gramas * 3.00);
    }

    return(valor / 100);
}
