let tempo = Number(prompt("quanto foi o tempo de viagem?"));
let velocidade = Number(prompt("qual a velocidade média?"));

let distancia = tempo * velocidade;
let litros = distancia / 12;

alert(`em uma viagem de ${tempo}h, percorrendo em uma velocidade média de ${velocidade}km/h, gastara ${litros} litros de gasolina`);