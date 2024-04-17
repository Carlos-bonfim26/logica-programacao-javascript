let macas = parseInt(prompt("quantas maças você comprou?"));

if(macas >= 12){
    alert(`${macas} maças saem por ${macas}R$`);
} else{
    alert(`${macas} maças saem por ${macas * 1.30.toFixed(2)}R$`); 
}