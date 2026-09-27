const { error } = require("node:console");
const { Producto } = require('./producto');


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

  aplicarDescuento(nombre, porcentaje) {
    if (porcentaje > 100 || porcentaje < 0)
      throw new Error("Porcentaje debe ser un valor positivo entre 0 y 100");

    let producto = this.buscarProducto(nombre);

    const descuento = porcentaje / 100;
    const nuevoPrecio = producto.precio - (producto.precio*descuento);

    producto.actualizarPrecio(nuevoPrecio);

  }
}

module.exports = { Tienda };