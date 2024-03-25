// ui.js

// Este módulo se encarga de la interfaz de usuario

const UI = {
    mostrarResultado: function(resultado) {
      console.log(`El resultado es: ${resultado}`);
    },
    mostrarError: function(error) {
      console.error(`Error: ${error.message}`);
    }
  };
  
  // Exportamos el módulo
  export default UI;