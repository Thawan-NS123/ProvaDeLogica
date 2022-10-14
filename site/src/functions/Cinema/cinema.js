export async function calcIngresso(qtdInteiras, qtdMeias, diaSemana, nacional){

    // diaSemana = diaSemana.toLowerCase()
     
    let calc = 0;
 
     if (nacional == true){
         calc = (qtdInteiras + qtdMeias) * 5;
     }
     else if (diaSemana == 'quarta-feira'){
         calc = (qtdInteiras + qtdMeias) * 14.25;
     }
     else {
         calc = (qtdInteiras * 28.50) + (qtdMeias * 14.25);
     }
         return calc;
 
 }