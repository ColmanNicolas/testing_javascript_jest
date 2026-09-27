const { error } = require("node:console");


class Tienda {
  constructor() {
    this.inventario = [];
  }

  agregarProducto(producto) {
    this.inventario.push(producto);
  }

  buscarProducto(nombre) {
    const producto = this.inventario.find(p => p.nombre === nombre);
    if (!producto) {
      throw new Error(`Producto '${nombre}' no encontrado`);
    }
    return producto;
  }

  eliminarProducto(nombre) {
    const indice = this.inventario.findIndex(p => p.nombre === nombre);

    if (indice !== -1) {
      this.inventario.splice(indice, 1);
      return true;
    } else {
      throw new Error(`Producto '${nombre}' no pudo ser eliminado`);
    }
  }

}

module.exports = { Tienda };