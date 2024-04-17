let valor;
let soma = 0;
let media;
let contador = 0;

while(contador < 10){
   valor = Number(prompt(`digite o ${contador + 1}° valor:`));
   soma = soma + valor;
   contador++ 
}
if(media > 0){
    media = soma / contador;
    alert(`a média dos valores digitados é ${media.toFixed(2)}`);
} else{
    alert("não foi digitado nenhum valor")
}