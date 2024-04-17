let idade = parseInt(prompt("qual a sua idade?"));

if(idade < 16){
    alert("não pode votar");
}
else{
    if(idade > 18 && idade <= 70){
        alert("voto origatório")
    } else{
        alert("voto opcional")
    }
}