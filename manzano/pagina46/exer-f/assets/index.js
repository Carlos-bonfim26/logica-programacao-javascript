let numero = Number(prompt("digite um número"));
let expoente = Number(prompt("digite um número para ser o expoente do outro número"));
let acumulador = 1;
let contador = 1;
while (contador <= expoente) {
  acumulador = acumulador * numero;
  contador++;
}
alert(acumulador);
