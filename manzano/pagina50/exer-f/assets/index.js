let valor;
let somatorio = 0;
let total = 0;
let media;

do{
    valor = Number(prompt("digite valores positivos, caso queira parar digite um número negativo"))

    if(valor >= 0){
        somatorio = somatorio + valor
        total++
    }
}while(valor > 0)

if(valor < 0){
    media = somatorio / total;
    alert(`o somátorio dos valores é: ${somatorio}`);
    alert(`a média aritmética dos valores é: ${media}`);
    alert(`o total de valores lidos é: ${total}`);
}else{
    alert("Nenhum valor positivo foi fornecido");
}