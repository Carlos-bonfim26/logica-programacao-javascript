let n1 = Number(prompt("qual foi a sua primeira nota?"));
let n2 = Number(prompt("qual foi a sua segunda nota nota?"));

let media = (n1 + n2) / 2

if(media >= 6){
  alert(`sua nota foi de ${media}, você foi aprovado!`)  
} else{
    alert(`sua nota foi de ${media}, você foi reprovado!`)  
}