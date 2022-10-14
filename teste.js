function calcIngrasso(qtdInteiras, qtdMeias, diaSemana, nacional){

    diaSemana = diaSemana.toUpperCase()

    let vlIngressos = qtdInteiras * 28.50 + qtdMeias * 14.25
    
    if(diaSemana == 'quarta-feria'){
        vlIngressos = qtdInteiras * 14.25 + qtdMeias * 14.25
    }

    if(nacional == true || nacional == true && diaSemana == 'quarta-feria'){
        vlIngressos = qtdInteiras * 5.00 + qtdMeias * 5.00
    }

    return vlIngressos
}
//42,75
console.log(calcIngrasso(1,1,'quarta-FEIRA',false));