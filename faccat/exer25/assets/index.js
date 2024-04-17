let nome = prompt("qual o seu nome?");
let sexo = prompt("qual o seu sexo?, masculino digite 'm', feminino digite 'f'");
let altura = Number(prompt("qual a sua altura?, não coloque vírgula, coloque ponto por favor!"));
let peso;
if(sexo == "m"){
peso = 72.7 * altura - 58;
alert(`olá ${nome}, o peso ideal para você é ${peso.toFixed(2)}`);
} else{
    peso = 62.1 * altura - 44.7;
    alert(`olá ${nome}, o peso ideal para você é ${peso.toFixed(2)}`);
}
