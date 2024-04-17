let nota1 = Number(prompt("digite sua primeira nota:"));
let nota2 = Number(prompt("digite sua segunda nota:"));
let nota3 = Number(prompt("digite sua terceira nota:"));
let media = (nota1 + nota2 + nota3) / 3;
let media_aproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + media) / 7

if(media_aproveitamento >= 9){
alert(`sua média é ${media_aproveitamento.toFixed(2)}, conceito A`)
} else if(media_aproveitamento >= 7.5){
    alert(`sua média é ${media_aproveitamento.toFixed(2)}, conceito B`)
} else if(media_aproveitamento >= 6){
    alert(`sua média é ${media_aproveitamento.toFixed(2)}, conceito C`)
} else{
    alert(`sua média é ${media_aproveitamento.toFixed(2)}, conceito D`)
}