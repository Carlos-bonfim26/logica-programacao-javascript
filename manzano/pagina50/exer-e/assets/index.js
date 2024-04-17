let numero;
let contador = 1;
let fatorial;
let fatorial2;
do{
    numero = parseInt(prompt("digite um número inteiro:"));
    fatorial = 1;
    for(fatorial2 = 1; fatorial2 <= numero; fatorial2++){
        fatorial = fatorial + fatorial2
    }
    alert(`o fatorial de ${numero} é igual a ${fatorial - 1}`);
    contador++
}while(contador <= 15)