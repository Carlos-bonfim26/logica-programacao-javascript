let produto = prompt("qual é o nome do produto?");
let quantidade = parseInt(prompt("qual a quantidade adquirida?"));
let preco = Number(prompt("qual é seu preço unitário?"));
let preco_total;
let preco_desc;
if(quantidade <= 5){
    preco_total = preco * quantidade;
   preco_desc = preco_total - preco_total / 50;
    alert(`${quantidade} de ${produto} custam R$ ${preco_desc}`);
} else if(quantidade > 5 && quantidade <=10){
    preco_total = preco * quantidade;
    preco_desc = preco_total - preco_total / 100 * 3;
    alert(`${quantidade} de ${produto} custam R$ ${preco_desc}`);
} else{
    preco_total = preco * quantidade;
    preco_desc = preco_total - preco_total / 20;
    alert(`${quantidade} de ${produto} custam R$ ${preco_desc}`);
}