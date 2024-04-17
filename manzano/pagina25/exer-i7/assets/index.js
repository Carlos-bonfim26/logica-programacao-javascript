let caixa = [['volume','comprimento', 'largura', 'altura'], [0, 0, 0, 0]]
caixa[1][1] = Number(prompt('digite o comprimento da caixa retangular'));
caixa[1][2] = Number(prompt('digite a largura da caixa retangular'));
caixa[1][3] = Number(prompt('digite a altura da caixa retangular'));
caixa [1][0] = caixa[1][1] * caixa[1][2] * caixa[1][3];
alert(`o ${caixa[0][0]} da caixa é ${caixa[1][0]}`);
