/**** Escreva o código abaixo 👇******/

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
    throw new console.error( "Erro: divisão por zero");

  }
  return a / b;
}

/* Questão 7 */
function calcularAreaRetangulo(largura, altura) {
  return multiplicar(largura, altura);
}




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
