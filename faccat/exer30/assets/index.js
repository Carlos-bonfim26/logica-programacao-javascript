let qntd_estoque= Number(prompt("quantidade em estoque?"));
let max_estoque= Number(prompt("quantidade maxima em estoque?"));
let min_estoque= Number(prompt("quantidade minima em estoque?"));
let media_estoque= (max_estoque + min_estoque) /2;

if(qntd_estoque >= media_estoque){
    alert(`${qntd_estoque} em estoque, não é necessário efetuar compra`);
} else{
    alert(`${qntd_estoque} em estoque, é necessário efetuar compra`);
}