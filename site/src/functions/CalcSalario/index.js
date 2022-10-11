export async function calcSalario(salario, bonus, desconto){

    const calc = (salario - desconto) + ((bonus/100) * salario);
    return calc;
}