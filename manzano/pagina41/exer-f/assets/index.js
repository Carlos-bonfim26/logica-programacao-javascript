let numero1 = Number(prompt("digite um valor inteiro:"));
let numero2 = Number(prompt("digite outro valor:"));
let numero3 = Number(prompt("digite outro valor:"));

if(numero1 > numero2 && numero1 > numero3){
  if(numero2 > numero3){
    alert(`${numero1}, ${numero2}, ${numero3}`);
  } else{
    alert(`${numero1}, ${numero3}, ${numero2}`);
  }
} else if(numero2 > numero1 && numero2 > numero3){
  if(numero1 > numero3){
    alert(`${numero2}, ${numero1}, ${numero3}`);
  } else{
    alert(`${numero2}, ${numero3}, ${numero1}`);
  }
} else if(numero3 > numero1 && numero3 > numero2){
  if(numero1 > numero2){
    alert(`${numero3}, ${numero1}, ${numero2}`);
  } else{
    alert(`${numero3}, ${numero2}, ${numero1}`);
  }
}