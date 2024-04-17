let ladoA = Number(prompt("tamanho do lado a"));
let ladoB = Number(prompt("tamanho do lado b"));
let ladoC = Number(prompt("tamanho do lado c"));

if(ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoB + ladoA){
    alert(`não é um triângulo`);
} else{
    alert(`é um triângulo`);
}