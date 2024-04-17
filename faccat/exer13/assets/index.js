let salario_fixo = Number(prompt("qual o seu sálario fixo?"));
let carros_vendidos = Number(prompt("você vendeu quantos carros?"));
let comissao = Number(prompt("quanto você ganha por carro vendido?"));
let vendas = Number(prompt("qual foi o valor total das suas vendas?"));

let salario = salario_fixo + salario_fixo / 20 + carros_vendidos * comissao

alert(`o seu salário será de ${salario}R$`)