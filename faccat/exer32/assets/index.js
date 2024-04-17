let valor1 = Number(prompt("digite um valor:"));
let valor2 = Number(prompt("digite um valor:"));
let valor3 = Number(prompt("digite um valor:"));

if(valor1 > valor2 && valor1 > valor3){
    alert(`${valor1} é o maior!`);
} else if(valor2 > valor3 && valor2 > valor1){
    alert(`${valor2} é o maior!`);
} else{
    alert(`${valor3} é o maior!`);
}