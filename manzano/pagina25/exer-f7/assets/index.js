let a = parseInt(prompt("digite um número inteiro:"));
let b = parseFloat(prompt("digite um número real:"));

let troca = a;
a = b;
b = troca;

alert("valor trocado " + a);

alert("valor trocado " + b);
