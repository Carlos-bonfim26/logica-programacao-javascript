
let fatorial;
let fatorial2;
for (let contador = 1; contador <= 10; contador++) {
  if (contador % 2 != 0) {
    fatorial = 1
    for (fatorial2 = 1; fatorial2 <= contador; fatorial2++) {
      fatorial = fatorial + fatorial2;
    }
    console.log(`o fatorial de ${contador} é igual a ${fatorial - 1}`);
  }
}
