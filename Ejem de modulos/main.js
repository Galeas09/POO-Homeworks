// main.js

// Importamos los módulos
import { sumar, restar, multiplicar, dividir } from './logica';
import { mostrarResultado, mostrarError } from './ui';
import { validarNumeros } from './utils';

// Función principal
function calcular(operacion, a, b) {
  try {
    validarNumeros(a, b);
    let resultado;
    switch (operacion) {
      case 'sumar':
        resultado = sumar(a, b);
        break;
      case 'restar':
        resultado = restar(a, b);
        break;
      case 'multiplicar':
        resultado = multiplicar(a, b);
        break;
      case 'dividir':
        resultado = dividir(a, b);
        break;
      default:
        throw new Error("Operación no válida");
    }
    mostrarResultado(resultado);
  } catch (error) {
    mostrarError(error);
  }
}

// Ejemplos de uso
calcular('sumar', 5, 3); // Output: El resultado es: 8
calcular('dividir', 10, 0); // Output: Error: No se puede dividir por cero