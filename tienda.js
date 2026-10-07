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


/**
   * Calcula el total de una lista de productos en el carrito de compras.
   * @param {string[]} listaNombres - Arreglo de strings con los nombres de los productos a sumar.
   * @returns {number} La suma acumulada de los precios de los productos.
   * @throws {Error} Si algún producto del arreglo no existe en el inventario.
   */
  
  calcularTotalCarrito(listaNombres) {
    return listaNombres.reduce((total, nombre) => {
      const producto = this.buscarProducto(nombre);
      return total + producto.precio;
    }, 0);
  }

}

module.exports = { Tienda };