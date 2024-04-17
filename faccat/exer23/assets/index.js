let comeco = Number(prompt("que horas começou o jogo?, coloque só número do horário."));
let fim = Number(prompt("que horas acabou o jogo?"));
let duracao;

if(fim == comeco){
duracao = comeco - fim + 24
alert(`duração de jogo: ${duracao}h`)
}
else if(fim < comeco){
    duracao = fim- comeco + 24
alert(`duração de jogo: ${duracao}h`);
} else{
    duracao = fim - comeco
    alert(`duração de jogo: ${duracao}h`);
}