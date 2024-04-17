let contador = 0;
let numero1 = 1;
let numero2 = 0;
let numero3;

while(contador <=15){
    numero3 = numero1 + numero2;
    numero1 = numero2;
    numero2 = numero3;
    console.log(numero3);
    contador++
}