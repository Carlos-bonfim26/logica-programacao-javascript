let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let num3 = Number(prompt("Digite o terceiro número:"));
let num4 = Number(prompt("Digite o quarto número:"));
let num5 = Number(prompt("Digite o quinto número:"));
let maior = num1;
let menor = num1;
if (num2 > maior) {
  maior = num2;
} else if (num2 < menor) {
  menor = num2;
}
if (num3 > maior) {
  maior = num3;
} else if (num3 < menor) {
  menor = num3;
}
if (num4 > maior) {
  maior = num4;
} else if (num4 < menor) {
  menor = num4;
}
if (num5 > maior) {
  maior = num5;
} else if (num5 < menor) {
  menor = num5;
}
alert(`${maior} é o número maior, ${menor} é o número menor`);
