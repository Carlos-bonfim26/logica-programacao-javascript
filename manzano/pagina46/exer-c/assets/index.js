let contador = 1;
let acumulador = 0;
while(contador <= 500){
    if(contador % 2 ==0){
     acumulador = acumulador + contador;   
    }
    contador++
}
console.log(acumulador);
alert(acumulador);