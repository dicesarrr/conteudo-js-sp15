// Funções

// Função de Multiplicação
function multiplicar(a, b) {
  return a * b;
}

console.log(multiplicar(10, 3));
console.log(multiplicar(2, 4));
console.log(multiplicar(8, 5));
console.log(multiplicar(7, 7));

console.log("");

// Função de Soma
function soma(a, b) {
  return a + b;
}

console.log(soma(10, 10));
console.log(soma(50, 10));
console.log(soma(20, 18));
console.log(soma(23, 43));

console.log("");

// Função de Subtração
function subtracao(a, b) {
  return a - b;
}

console.log(subtracao(10, 10));
console.log(subtracao(50, 10));
console.log(subtracao(20, 18));
console.log(subtracao(23, 43));

console.log("");

// Função de Divisão
function divisao(a, b) {
  return a / b;
}

console.log(divisao(10, 5));
console.log(divisao(10, 2));
console.log(divisao(10, 10));
console.log(divisao(8, 4));

console.log("");

// Função com um parâmetro
function paraCelsius(grausFahrenheit) {
  
  let calculoConversao = (5/9) * (grausFahrenheit - 32);

  return `${grausFahrenheit}° Fahrenheit convertido para Celsius é igual a: ${calculoConversao}°C`;

}

let grausFahrenheit = parseFloat(prompt("Informe a temperatura em graus fahrenheit para converter em graus celsius: "));


document.querySelector(".teste").innerHTML = paraCelsius(grausFahrenheit);

