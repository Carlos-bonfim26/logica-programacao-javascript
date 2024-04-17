let nome = prompt("qual seu nome");
let sexo = prompt("qual seu sexo? masculino m, feminino f");

if(sexo == 'f' || sexo == 'F'){
    alert(`olá sra ${nome}`);
} else if(sexo == 'm' || sexo == 'M'){
 alert(`olá sr ${nome}`);
} else{
    alert('valor invalido');
}