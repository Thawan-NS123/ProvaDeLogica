export async function calcSalario(salario, bonus, desconto){

    if(salario < 0 || bonus < 0 || desconto < 0){
        return 0
    }

    const calc = (salario - desconto) + ((bonus/100) * salario);
    return calc;
}