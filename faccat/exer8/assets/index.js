let anos = Number(prompt("quantos anos você já viveu?"));
let mes = Number(prompt("tem quantos meses desde o seu último aniversário?"))
let dias = Number(prompt("quantos dias você viveu desde os seu último mês versario?"));

let diasVividos = anos * 365 + mes * 30 + dias;

alert(`você já viveu ${diasVividos} dias`);
