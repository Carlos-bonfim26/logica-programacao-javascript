let valor = Number(prompt("digite um valor, quando for digitado um valor negativo o programa deve não ser mais executado"));
let menor;
let maior;
let primeiro;

if(valor >= 0){
    menor = valor;
    maior = valor;
    primeiro = false;
} else{
    alert("nenhum valor foi digitado");
}
while(valor >= 0){
    if(valor < menor){
        menor = valor
    } else if(valor > maior){
        maior = valor
    }
    valor = Number(prompt("digite um valor, quando for digitado um valor negativo o programa deve não ser mais executado"));
}
alert(`o menor valor digitado foi: ${menor}`);
alert(`o maior valor digitado foi: ${maior}`);