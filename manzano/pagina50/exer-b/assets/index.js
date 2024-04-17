let numero = 1;
let acumulador = 0;

do{
if(numero % 2 == 0){
    acumulador = acumulador + numero;
}
numero++
}while(numero <=500)
console.log(acumulador)