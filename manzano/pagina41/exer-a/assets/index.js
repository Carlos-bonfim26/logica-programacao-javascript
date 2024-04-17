let numero1 = Number(prompt("digite um valor inteiro:"));
let numero2 = Number(prompt("digite outro valor:"));
let diferenca;

if(numero1 > numero2){
    diferenca = numero1 - numero2;
    alert(`${numero1} é maior que ${numero2}, e a diferença entre eles é de ${diferenca}`)
} else{
    diferenca = numero2 - numero1;
    alert(`${numero2} é maior que ${numero1}, e a diferença entre eles é de ${diferenca}`)
}