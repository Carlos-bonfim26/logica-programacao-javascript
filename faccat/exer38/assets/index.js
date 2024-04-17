let combustivel = parseInt(prompt("qual combustivrl você vai usar, 1 - Alcool, 2 - Gasolina"));
let litros;

let preco;
switch(combustivel){
   case 1:
    litros = Number(prompt("quantos litros você colocou?"));
    if(litros > 20){
        preco = litros * 2.90;
        preco = preco - preco / 20;
        alert(`em ${litros} litros de álcool você gastara R$${preco.toFixed(2)}`)
    } else{
        preco = litros * 2.90;
        preco = preco - preco / 100 * 3
        alert(`em ${litros} litros de álcool você gastara R$${preco.toFixed(2)}`)
    }
   break;
   case 2:
    litros = Number(prompt("quantos litros você colocou?"));
    if(litros > 20){
        preco = litros * 3.30;
        preco = preco - preco / 100 * 6;
        alert(`em ${litros} litros de gasolina você gastara R$${preco.toFixed(2)}`)
    } else{
        preco = litros * 3.30;
        preco = preco - preco / 25;
        alert(`em ${litros} litros de gasolina você gastara R$${preco.toFixed(2)}`)
    }
   break;
   default:
    alert("valor inválido");
   break;
    
}