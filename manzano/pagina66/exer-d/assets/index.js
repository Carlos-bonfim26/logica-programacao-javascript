let acumulador = 0;
for(let contador = 1; contador <=500; contador++){
    if(contador % 2 == 0){
        acumulador += contador;
    }
}
console.log(acumulador);