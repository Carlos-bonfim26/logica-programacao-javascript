
let contador = 1;
let fatorial;
let fatorial2;
do {
  if (contador % 2 != 0) {
    fatorial = 1;
    for (fatorial2 = 1; fatorial2 <= contador; fatorial2++) {
      fatorial = fatorial + fatorial2;
    }
    console.log(`o fatorial de ${contador} é igual a ${fatorial - 1}`);
  }
  contador++;
} while (contador <= 20);
