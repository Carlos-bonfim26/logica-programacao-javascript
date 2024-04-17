let raio = Number(prompt("qual é o raio da lata?"));
let altura = Number(prompt("qual é o altura da lata?"));
let volume = Math.PI * raio**2 * altura;
alert(`o volume da lata é de: ${volume.toFixed(2)}`);
