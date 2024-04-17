let horas_trabalhadas = Number(prompt("quantas horas você trabalhou no mês?"));
let salario_hora = Number(prompt("quanto você ganha por hora"));
let salario;
let bonus;
let hora_extra;

if(horas_trabalhadas > 40){
  hora_extra = horas_trabalhadas - 40;
  bonus = (salario_hora / 2 + salario_hora) * hora_extra;
    salario = 40 * salario_hora + bonus;
    alert(`você trabalhou ${horas_trabalhadas}h na semana, e seu salário é de R$ ${salario.toFixed(2)}`);
} else{
    salario = horas_trabalhadas * salario_hora;
    alert(`você trabalhou ${horas_trabalhadas}h na semana, e seu salário é de R$${salario.toFixed(2)}`);
}