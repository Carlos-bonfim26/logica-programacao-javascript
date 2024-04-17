let idade = parseInt(prompt("qual a sua idade?"))
let condicao = prompt("você é habilitado ou não habilitado")
if (!(idade>=18 && condicao =="habilitado")){
	alert("Pode dirigir")
}else{
	alert("Não pode dirigir")
}