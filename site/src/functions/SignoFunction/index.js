

function Signo (dia, mes){
   
    mes = mes.toLowerCase()
    let msg = False;

    if (mes == "outubro" && dia >= 23 && dia <= 31 || 
        mes == "novembro" && dia >= 1 && dia <=21)
    {
        msg = True;
    }
    return msg;
}
