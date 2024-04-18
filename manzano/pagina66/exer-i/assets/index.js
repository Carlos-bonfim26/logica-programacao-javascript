let numero1 = 0;
let numero2 = 1;
let fibonacci;
console.log(numero1);
console.log(numero2);

for (let contador = 3; contador <= 15; contador++) {
  fibonacci = numero1 + numero2;
  console.log(fibonacci);
  numero1 = numero2;
  numero2 = fibonacci;
}
