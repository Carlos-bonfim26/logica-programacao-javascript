let dia = Number(prompt("digite o número do dia:"));
//res = (num < 10)? "numero menor que 10" : "numero maior que 10";
let dia2 = (dia == 1)? "domingo" : (dia == 2)? "segunda":(dia == 3)? "terça":(dia == 4)? "quarta":(dia == 5)? "quinta":(dia == 6)? "sexta":(dia == 7)? "sabado":"numero inválido";
alert(dia2);