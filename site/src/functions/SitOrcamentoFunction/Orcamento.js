export async function sitOrcamento(ganhos, gastos){

    let vinteUm = (ganhos/100) * 21 // 21%
    let cinquentaUm = (ganhos/100) * 51 // 51%
    let oitentaUm = (ganhos/100) * 81 // 81%
    let cem = (ganhos/100) * 100 // 100%
    
    let msg = ''

    if (vinteUm >= gastos){
        msg = 'Parabéns, está gerenciando bem seu orçamento!'
    }
    else if (gastos <= cinquentaUm && gastos >= vinteUm){
        msg = 'Muito bem, seus gasto não ultrapassam metade dos ganhos!'
    }

    else if (gastos <= oitentaUm && gastos >= cinquentaUm){
        msg = 'Atenção, melhor conter os gastos!'
    }

    else if (gastos <= cem && gastos >= oitentaUm){
        msg = 'Cuidado, seu orçamento pode ficar comprometido!'
    }

    else {
        msg = 'Orçamento comprometido! Hora de rever seus gastos!'
    }

    return msg;
}