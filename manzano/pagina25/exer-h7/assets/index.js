let valor = [0, 0, 0, 0]
valor[0] = Number(prompt('digite um número'));
valor[1] = Number(prompt('digite outro número'));
valor[2] = valor[0] - valor[1];

valor[3] = valor[2] < 0? valor[2] * -1: valor[2];

alert(`${valor[3]} ^ 2 = ${valor[3] ** 2}`);