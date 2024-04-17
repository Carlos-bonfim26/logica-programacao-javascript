let areaTotal = 0;
let continuar;
do {
    let nomeComodo = prompt("Digite o nome do cômodo:");
    let largura = Number(prompt("Digite a largura do cômodo em metros:"));
    let comprimento = Number(prompt("Digite o comprimento do cômodo em metros:"));
    let areaComodo = largura * comprimento;
    areaTotal += areaComodo;
    alert("A área do " + nomeComodo + " é: " + areaComodo + " metros quadrados.");
    continuar = prompt("Deseja adicionar outro cômodo? (sim/não)").toLowerCase();
} while (continuar == "sim");
