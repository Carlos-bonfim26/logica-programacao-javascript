let votos = Number(prompt("qual foi a quantidade de votos totais?"));
let brancos = Number(prompt("qual foi a quantidade de votos brancos?"));
let nulos = Number(prompt("qual foi a quantidade de votos nulos?"));
let validos = Number(prompt("qual foi a quantidade de votos validos?"));

validos = validos / votos * 100;
brancos = brancos / votos *100;
nulos =  nulos / votos * 100;

alert(`o percentual de votos brancos é de ${brancos}%, de votos nulos é de ${nulos}%, e a de votos válidos é de ${validos}%`);