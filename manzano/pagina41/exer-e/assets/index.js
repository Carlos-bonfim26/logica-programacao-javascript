let numero1 = Number(prompt("digite um valor:"));

if (numero1 != 0) {
  let numero2 = Number(prompt("digite outro valor:"));
  let numero3 = Number(prompt("digite outro valor:"));
  let delta = numero2 ** 2 - 4 * numero1 * numero3;
  if(delta != 0){
  let raiz1 = (-numero2 + Math.sqrt(delta)) / (2 * numero1);
  let raiz2 = (-numero2 - Math.sqrt(delta)) / (2 * numero1);

  alert(`a primeira raiz da equação de 2°grau é ${raiz1}, e a segunda ${raiz2}`
  );
}else{
    alert("não existem raízes reais")
}
} else {
  alert("o primeiro valor não pode ser zero");
}
