let morango = Number(prompt("Quantos KG de morango você comprou?"));
let maca = Number(prompt("Quantos KG de maçã você comprou?"));
let preco_morango;
let preco_maca;
let total;

if(morango > 5){
    preco_morango = morango * 2.20
} else{
    preco_morango = morango * 2.50
}
if(maca > 5){
 preco_maca = maca * 1.50
} else{
    preco_maca = maca * 1.80
}
total = preco_maca + preco_morango;
if(maca + morango > 8 || total > 25){
total = total - total / 10;
}
alert(`você comprou ${morango} kg de morango, ${maca} kg de maça, e o preço total foi de R$${total.toFixed(2)}`);
