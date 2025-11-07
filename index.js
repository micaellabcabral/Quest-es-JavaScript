/**** Escreva o código abaixo 👇******/
const a = 10;
const b = 5;

/* Questão 1 */
function somar(a, b) {
  return a + b;
}

/* Questão 2 */
function multiplicar(a, b) {
  return a * b;
}

/* Questão 3 */
function subtrair(a, b) {
  return a - b;
}

/* Questão 4 */
function dividir (a, b) {
  if (b === 0) {
    return "Erro: divisão por zero";
  }
  return a / b;
}

/* Questão 7 */
function calcularAreaRetangulo(largura, altura) {
  return multiplicar(largura, altura);
}

console.log ("Soma:", somar(a, b));
console.log ("Multiplicação:", multiplicar(a,b))
console.log ("Subtração:", subtrair (a,b))
console.log ("Divisão:", dividir (a,b))
console.log ("Área do retângulo:", calcularAreaRetangulo(10, 5)); 


/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
