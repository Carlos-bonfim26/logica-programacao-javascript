let salario = Number(prompt("digite o seu salário"));
let reajuste = Number(prompt("digite o reajuste"));

let salario_final = salario + salario * reajuste / 100;
alert(`o seu novo salário é de R$${salario_final}`)
