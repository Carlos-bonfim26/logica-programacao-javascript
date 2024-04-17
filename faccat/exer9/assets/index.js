let salario = Number(prompt("qual o seu salário atual?"));
let reajuste = Number(prompt("quanto é a porcentagem do reajuste?, só coloque o número"));

let salario_reajustado = salario + salario / reajuste;

alert(`seu salário antigo de R$${salario}, com o reajuste de ${reajuste}% ficará de ${salario_reajustado}`);
