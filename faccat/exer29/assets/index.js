let saldo = Number(prompt("me diga seu saldo"));
let debito = Number(prompt("me diga seu debito"));
let credito = Number(prompt("me diga seu credito"));

let saldo_atual = saldo - debito + credito;

if(saldo_atual < 0){
    alert(`saldo negativo, seu saldo atual está de ${saldo_atual}`);
} else{
    alert(`saldo positivo, seu saldo atual está de ${saldo_atual}`);
}