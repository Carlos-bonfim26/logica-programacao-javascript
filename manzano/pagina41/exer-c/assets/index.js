let nota1 = Number(prompt("digite sua primeira nota"));
let nota2 = Number(prompt("digite sua segunda nota"));
let nota3 = Number(prompt("digite sua terceira nota"));
let nota4 = Number(prompt("digite sua quarta nota"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if(media >= 5){
    alert(`você foi aprovado com a média de ${media}`);
} else{
    alert(`você foi reprovado com a média de ${media}`); 
}

