// areaTriangulo.
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  

  // volumenEsfera
function calcularVolumenEsfera(radio) {
    return (4 / 3) * Math.PI * Math.pow(radio, 3);
  }
  


  // valorAbsoluto
function obtenerValorAbsoluto(numero) {
    return Math.abs(numero);
  }
  

  // factorial
function calcularFactorial(numero) {
    if (numero < 0) {
      throw new Error('No se puede calcular el factorial de un número negativo');
    }
    if (numero === 0 || numero === 1) {
      return 1;
    }
    return numero * calcularFactorial(numero - 1);
  }

function dividir(a,b) {
  
  if (a==0||b==0) {
    return 1
  }
  return a/b
}
  
  module.exports = {
    calcularAreaTriangulo,
    calcularVolumenEsfera,
    calcularFactorial,
    obtenerValorAbsoluto,
    dividir
  };
  