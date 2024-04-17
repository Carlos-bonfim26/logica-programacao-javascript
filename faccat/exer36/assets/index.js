let numero1 = Number(prompt("digite um valor:"));
let numero2 = Number(prompt("digite outro valor:"));

if(numero1 > numero2){
    alert(`${numero1} maior que ${numero2}`);
} else if(numero1 == numero2){
    alert(`${numero1} igual a ${numero2}`);
} else{
    alert(`${numero2} maior que ${numero1}`); 
}
