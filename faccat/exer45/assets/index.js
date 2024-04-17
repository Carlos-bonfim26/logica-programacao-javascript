alert("vendo se é um triângulo e qual tipo:");
let ladoA = Number(prompt("digite o tamanho do lado A do triângulo:"));
let ladoB = Number(prompt("digite o tamanho do lado B do triângulo:"));
let ladoC = Number(prompt("digite o tamanho do lado C do triângulo:"));

if(ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB){
    alert("não é um triângulo");
} else if(ladoA == ladoB && ladoB == ladoC){
    alert("triângulo isósceles");
} else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
    alert("triângulo Escaleno");
} else{
    alert("triângulo equilátero");
}