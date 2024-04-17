let timeA = (prompt("qual é o time da casa?"));
let timeB = (prompt("qual é o time visitante?"));
let golsA = parseInt(prompt(`quantos gols o ${timeA} fez?`));
let golsB = parseInt(prompt(`quantos gols o ${timeB} fez?`));

if(golsA > golsB){
    alert(`${timeA} ganhou do ${timeB} pelo placar de ${golsA} x ${golsB}`);
} else if(golsA == golsB){
    alert(`${timeA} empatou do ${timeB} pelo placar de ${golsA} x ${golsB}`);
} else{
    alert(`${timeB} ganhou do ${timeA} pelo placar de ${golsA} x ${golsB}`);
}