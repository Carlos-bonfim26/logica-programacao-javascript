let valor;
let maior = 0;
let menor = Infinity;

do{
    valor = parseInt(prompt("digite um valor positivo inteiro, digite um negativo para parar o programa"));
    
    if(valor >= maior){
        maior = valor;
    } else if(valor <= menor && valor >= 0){
        menor = valor
    }

}while(valor > 0)
alert(`o maior número digitado foi ${maior}`);
alert(`o menor número digitado foi ${menor}`);