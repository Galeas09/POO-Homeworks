// logica.js
const Calculadora = {
    sumar: function(a, b) {
      return a + b;
    },
    restar: function(a, b) {
      return a - b;
    },
    multiplicar: function(a, b) {
      return a * b;
    },
    dividir: function(a, b) {
      if (b === 0) {
        throw new Error("No se puede dividir por cero");
      }
      return a / b;
    }
  };
  
  // Exportamos el módulo
  export default Calculadora;