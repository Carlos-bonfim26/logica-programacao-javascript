let mes = Number(prompt("digite o número do mes:"));
//res = (num < 10)? "numero menor que 10" : "numero maior que 10";
let mes2 = (mes == 1)? "janeiro" : (mes == 2)? "fevereiro":(mes == 3)? "março":(mes == 4)? "abril":(mes == 5)? "maio":(mes == 6)? "junho":(mes == 7)? "julho":(mes == 8)? "agosto":(mes == 9)? "setembro":(mes == 10)? "outubro":(mes == 11)? "novembro":(mes == 12)? "dezembro":"numero inválido";
alert(mes2);