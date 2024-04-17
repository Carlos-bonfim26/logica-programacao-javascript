let valor1 = Number(prompt("digite um valor:"));
let valor2 = Number(prompt("digite um valor:"));
let valor3 = Number(prompt("digite um valor:"));
let soma;
if(valor1 > valor2 && valor2 >> valor3){
    if(valor2 > valor3){
        soma = valor1 + valor2;
        alert(`a soma dos dois maiores é ${soma}`);
    } else{
        soma = valor1 + valor3;
        alert(`a soma dos dois maiores é ${soma}`);
    }
} else if(valor2 > valor1 && valor2 > valor3){
 if(valor1 > valor3){
    soma = valor1 + valor2;
    alert(`a soma dos dois maiores é ${soma}`);
 } else{
    soma = valor2 + valor3;
    alert(`a soma dos dois maiores é ${soma}`);
}
} else if(valor3 > valor1 && valor3 > valor2){
    if(valor1 > valor2){
        soma = valor1 + valor3;
        alert(`a soma dos dois maiores é ${soma}`); 
    } else{
        soma = valor2 + valor3;
        alert(`a soma dos dois maiores é ${soma}`);
    }
}