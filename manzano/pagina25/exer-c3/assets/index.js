let votos = [['canditato a', 'candidato b', 'candidato c', 'branco', 'nulo'],
             [0, 0, 0, 0, 0]];
votos[1][0] = Number(prompt(`digite a quantidade de votos do ${votos[0][0]}`));
votos[1][1] = Number(prompt(`digite a quantidade de votos do ${votos[0][1]}`));
votos[1][2] = Number(prompt(`digite a quantidade de votos do ${votos[0][2]}`));
votos[1][3] = Number(prompt(`digite a quantidade de votos ${votos[0][3]}`));
votos[1][4] = Number(prompt(`digite a quantidade de votos  ${votos[0][4]}`));

let votos_totais = votos[1][0] + votos[1][1] + votos[1][2] + votos[1][3] + votos[1][4];

alert(`tiveram ${votos_totais}`);
alert(`a porcentagem de votos no ${votos[0][0]} foi de ${votos[1][0] / votos_totais * 100}%`);
alert(`a porcentagem de votos no ${votos[0][1]} foi de ${votos[1][1] / votos_totais * 100}%`);
alert(`a porcentagem de votos no ${votos[0][2]} foi de ${votos[1][2] / votos_totais * 100}%`);
alert(`a porcentagem de votos ${votos[0][3]} foi de ${votos[1][3] / votos_totais * 100}%`);
alert(`a porcentagem de votos ${votos[0][4]} foi de ${votos[1][4] / votos_totais * 100}%`);