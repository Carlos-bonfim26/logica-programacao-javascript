let nota1 = Number(prompt("digite sua primeira nota"));
let nota2 = Number(prompt("digite sua segunda nota"));
let nota3 = Number(prompt("digite sua terceira nota"));
let nota4 = Number(prompt("digite sua quarta nota"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if(media >= 7){
    alert(`aprovado com média ${media}`)
} else{
    let nota_exame = Number(prompt("qual foi a sua nota de exame"));
    media = (media + nota_exame) / 2
    if(media >= 5){
        alert(`aprovado em exame com média ${media}`);
    } else{
        alert(`reprovado com média ${media}`)
    }
}

