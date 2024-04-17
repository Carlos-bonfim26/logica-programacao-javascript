let idade = parseInt(prompt("digite sua idade:"));
let trabalho = parseInt(prompt("digite a quantos anos você trabalha:"));

if(idade >=65 || trabalho >= 30 || idade >= 60 && trabalho >= 25){
    alert("requer aposentadoria");
} else{
    alert("não requer aposentadoria");
}