let numero = Number(prompt("digite um número"));
alert("veja a sua tabuada no console");
let contador = 0;

while(contador <= 10){
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++
}