let base = Number(prompt('digite a base da potência:'));
let expoente = Number(prompt('digite o expoente da potência:'));
let resposta = 1;
for(let contador = 1; contador <= expoente; contador++){
    resposta *= base;
}
alert(`${base} ^ ${expoente} = ${resposta}`);