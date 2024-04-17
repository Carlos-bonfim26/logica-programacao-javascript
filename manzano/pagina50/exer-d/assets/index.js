let grao = 1;
let acumulador = 0;
let contador = 1;
do{
    acumulador = grao + acumulador;
    console.log(`${contador}° tabuleiro, tem ${acumulador} grãos`);
    grao = grao * 2;
    contador++
}while(contador <=64);