const { obtenerValorAbsoluto, calcularVolumenEsfera, dividir, calcularFactorial, calcularAreaTriangulo } = require('./funciones');

test('Debe devolver el valor absoluto correctamente', () => {
  expect(obtenerValorAbsoluto(-7)).toBe(7);
});

test('Debe calcular correctamente el volumen de una esfera', () => {
  expect(calcularVolumenEsfera(3)).toBeCloseTo(113.097, 3);
});

test('Debe dividir correctamente dos números', () => {
  expect(dividir(10, 2)).toBe(5);
});

test('Debe calcular correctamente el factorial de un número', () => {
  expect(calcularFactorial(5)).toBe(120);
});

test('Debe calcular correctamente el área de un triángulo', () => {
  expect(calcularAreaTriangulo(5, 8)).toBe(20);
});
