let valor = Number(prompt("qual é o valor da parcela?"));
let taxa = Number(prompt("quanto é a taxa de atraso?"));
let tempo = parseInt(prompt("a quantos dias está atrasada?"));

let prestacao = valor + valor * taxa / 100 * tempo;

alert(`por conta dos ${tempo} dias atrasados, a prestação ficará de R$${prestacao.toFixed(2)}`);