let numero1 = Number(prompt("digite um valor inteiro:"));

if(numero1 < 0){
    alert(`${numero1} é negativo, convertido para positivo ${numero1 * -1}`)
}else{
    alert(`${numero1} é positivo`)
}