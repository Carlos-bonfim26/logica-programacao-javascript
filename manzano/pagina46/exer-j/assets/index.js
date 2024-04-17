let valor = 50;
let soma = 0;
let contador = 0;
let media;

while(valor <= 70){
   if(valor % 2 ==0){
    soma = soma + valor;
    contador++
   }
   valor++
}
media = soma / contador;
console.log(`a média dos valores pares entre 50 e 70 é ${media}`);
alert(`a média dos valores pares entre 50 e 70 é ${media}`);
