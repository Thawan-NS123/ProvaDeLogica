

export async function SignoFunction (dia, mes){
    let msg = false;

    mes = mes.toLowerCase()

    if (mes === "setembro" && dia >= 23 && dia <= 30 || 
        mes === "outubro" && dia >= 1 && dia <= 22)
    {
        msg = true;
    }
    return msg;
}

