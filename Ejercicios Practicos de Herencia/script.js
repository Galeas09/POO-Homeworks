class MenuRestaurante {
    constructor() {
      this.platos = {
        'Hamburguesa con papas': 8.50,
        'Tacos de Birria': 8.00,
        'Nachos': 5.75,
        'Bebidas de industria la constancia': 1.50
      };
    }
  
    mostrarMenu() {
      const tabla = document.getElementById('menu');
      for (const plato in this.platos) {
        const fila = tabla.insertRow();
        const celda1 = fila.insertCell(0);
        const celda2 = fila.insertCell(1);
        celda1.textContent = plato;
        celda2.textContent = `$${this.platos[plato].toFixed(2)}`;
      }
    }
  }
  
  class PedidoRestaurante {
    constructor(nombreCliente) {
      this.nombreCliente = nombreCliente;
      this.platos = {};
      this.estado = 'En cocina';
    }
  
    agregarPlato(plato, cantidad) {
      if (plato in this.platos) {
        this.platos[plato] += cantidad;
      } else {
        this.platos[plato] = cantidad;
      }
    }
  
    mostrarPedido() {
      const listaPedido = document.getElementById('pedido');
      listaPedido.innerHTML = '';
  
      for (const plato in this.platos) {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = `${this.platos[plato]} ${plato}`;
        listaPedido.appendChild(elementoLista);
      }
    }
  
    calcularTotal(menu) {
      let total = 0;
      for (const plato in this.platos) {
        total += menu.platos[plato] * this.platos[plato];
      }
      return total;
    }
  
    cambiarEstado(nuevoEstado) {
      this.estado = nuevoEstado;
    }
  }
  
  class PedidoEnProceso extends PedidoRestaurante {
    constructor(nombreCliente) {
      super(nombreCliente);
    }
  
    mostrarEnProceso() {
      const tabla = document.getElementById('enCocina');
      for (const plato in this.platos) {
        const fila = tabla.insertRow();
        const celda1 = fila.insertCell(0);
        const celda2 = fila.insertCell(1);
        const celda3 = fila.insertCell(2);
        const celda4 = fila.insertCell(3);
        celda1.textContent = this.nombreCliente;
        celda2.textContent = plato;
        celda3.textContent = this.platos[plato];
        celda4.textContent = this.estado;
      }
    }
  }
  
  const menuRestaurante = new MenuRestaurante();
  menuRestaurante.mostrarMenu();
  
  let pedidoActualRestaurante;
  
  function agregarPedidoRestaurante() {
    const cliente = document.getElementById('cliente').value;
    const plato = document.getElementById('producto').value;
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);
  
    if (!cliente || !plato || isNaN(cantidad) || cantidad <= 0) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }
  
    if (!pedidoActualRestaurante || cliente !== pedidoActualRestaurante.nombreCliente) {
      if (pedidoActualRestaurante && Object.keys(pedidoActualRestaurante.platos).length > 0) {
        alert('Solo se permite un pedido por cliente.');
        return;
      }
      pedidoActualRestaurante = new PedidoRestaurante(cliente);
    }
  
    pedidoActualRestaurante.agregarPlato(plato, cantidad);
    mostrarPedidoRestaurante();
  }
  
  function mostrarPedidoRestaurante() {
    pedidoActualRestaurante.mostrarPedido();
  }
  
  function finalizarPedidoRestaurante() {
    if (!pedidoActualRestaurante || Object.keys(pedidoActualRestaurante.platos).length === 0) {
      alert('Realice al menos un pedido antes de finalizar.');
      return;
    }
  
    const pedidoEnProceso = new PedidoEnProceso(pedidoActualRestaurante.nombreCliente);
    pedidoEnProceso.platos = { ...pedidoActualRestaurante.platos };
    pedidoEnProceso.mostrarEnProceso();
   
    pedidoActualRestaurante.cambiarEstado('Listo');
    mostrarEstadoPedidoRestaurante();
  
    pedidoActualRestaurante = null;
    mostrarPedidoRestaurante();
  }
  
  function mostrarEstadoPedidoRestaurante() {
    const estadoPedido = document.getElementById('estadoPedido');
    const elementoLista = document.createElement('li');
    elementoLista.textContent = `Pedido de ${pedidoActualRestaurante.nombreCliente} - Estado: ${pedidoActualRestaurante.estado}`;
    estadoPedido.appendChild(elementoLista);
  }