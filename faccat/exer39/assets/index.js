let homem1 = parseInt(prompt("digite a idade do primeiro homem:"));
let homem2 = parseInt(prompt("digite a idade do segundo homem:"));
let mulher1 = parseInt(prompt("digite a idade da primeira mulher:")); 
let mulher2 = parseInt(prompt("digite a idade da segunda mulher:")); 
let casal1;
let casal2;
if(homem1 > homem2){
    if(mulher1 > mulher2){
        casal1 = homem1 + mulher2;
        casal2 = mulher1 + homem2
        alert(`homem mais velho tem ${homem1} anos, e mulher mais nova ${mulher2} anos, a soma das idades fica ${casal1}`);
        alert(`mulher mais velha tem ${mulher1} anos, e homem mais novo tem ${homem2}, a soma das idades fica ${casal2} `);
    } else{
        casal1 = homem1 + mulher1;
        casal2 = mulher2 + homem2
        alert(`homem mais velho tem ${homem1} anos, e mulher mais nova ${mulher1} anos, a soma das idades fica ${casal1}`);
        alert(`mulher mais velha tem ${mulher2} anos, e homem mais novo tem ${homem2}, a soma das idades fica ${casal2} `);
    } 
} else{
    if(mulher1 > mulher2){
        casal1 = homem2 + mulher2;
        casal2 = mulher1 + homem1;
        alert(`homem mais velho tem ${homem2} anos, e mulher mais nova ${mulher2} anos, a soma das idades fica ${casal1}`);
        alert(`mulher mais velha tem ${mulher1} anos, e homem mais novo tem ${homem1}, a soma das idades fica ${casal2} `);
    } else{
        casal1 = homem2 + mulher1;
        casal2 = mulher2 + homem1;
        alert(`homem mais velho tem ${homem2} anos, e mulher mais nova ${mulher1} anos, a soma das idades fica ${casal1}`);
        alert(`mulher mais velha tem ${mulher2} anos, e homem mais novo tem ${homem1}, a soma das idades fica ${casal2} `);
    } 
}