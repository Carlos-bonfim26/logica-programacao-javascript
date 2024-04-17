let usuario = prompt("digite o número da conta:");
let senha;
if(usuario == "1234"){
 senha = prompt("digite sua senha:");
 if(senha == "9999"){
    alert("acesso permitido");
 } else{
    alert("senha incorreta");
 }
} else{
    alert("usuário inválido");
}