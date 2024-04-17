let preco_fabrica = Number(prompt("qual o preço de fabrica do carro?"));

let distribuidora = 28 / preco_fabrica * 100;
let imposto = 45 / preco_fabrica * 100;
let preco_total = preco_fabrica + distribuidora + imposto;

alert(`junto com os 45% de imposto e 28% da distribuidora o preço total do carro deu ${preco_total}`);