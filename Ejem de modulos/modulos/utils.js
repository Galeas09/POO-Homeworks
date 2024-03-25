// utils.js

// Este módulo contiene funciones de utilidad

const Utils = {
    validarNumeros: function(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Los argumentos deben ser números");
      }
    }
  };
  
  // Exportamos el módulo
  export default Utils;