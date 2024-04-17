let salario_fixo = Number(prompt("qual o seu salário fixo?"));
let valor_vendas = Number(prompt("quanto R$ voce ganhou em vendas?"));
let bonus;

if(valor_vendas > 1500){
    bonus = valor_vendas / 20;
    salario_fixo = salario_fixo + bonus;
    alert(`o seu salário vai ser de ${salario_fixo}`);
} else{
    bonus = valor_vendas / 100 * 3;
    salario_fixo = salario_fixo + bonus;
    alert(`o seu salário vai ser de ${salario_fixo}`);
}