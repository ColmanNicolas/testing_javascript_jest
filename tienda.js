

class Tienda {
  constructor() {
    this.inventario = [];
  }

  agregarProducto(producto) {
    this.inventario.push(producto);
  }

  buscarProducto(nombre) {
    return this.inventario.find(p => p.nombre === nombre) || null;
  }

  eliminarProducto(nombre) {
    const indice = this.inventario.findIndex(p => p.nombre === nombre);

    if (indice !== -1) {
      this.inventario.splice(indice, 1);
      return true;
    }
    return false;
  }
}

module.exports = { Tienda };