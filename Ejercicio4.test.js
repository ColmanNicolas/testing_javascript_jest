const { Producto } = require('./producto');
const { Tienda } = require('./tienda');

describe('Pruebas Ejercicio 4 - Uso de Fixtures', () => {
  let tienda; // Variable compartida para los tests

  // ESTE ES EL FIXTURE
  // Jest ejecuta esta función antes de CADA test individual
  beforeEach(() => {
    tienda = new Tienda();
    tienda.agregarProducto(new Producto('Monitor', 100, 'Periféricos'));
    tienda.agregarProducto(new Producto('Mouse', 50, 'Periféricos'));
    tienda.agregarProducto(new Producto('Teclado', 80, 'Periféricos'));
  });

  test('Debe buscar un producto precargado desde el fixture', () => {
    const producto = tienda.buscarProducto('Mouse');
    expect(producto.precio).toBe(50);
  });

  test('Debe eliminar un producto precargado sin afectar a otros tests', () => {
    const resultado = tienda.eliminarProducto('Teclado');
    expect(resultado).toBe(true);
    expect(tienda.inventario.length).toBe(2);
  });

  test('Debe agregar un nuevo producto a la base del fixture', () => {
    tienda.agregarProducto(new Producto('Auriculares', 40, 'Audio'));
    expect(tienda.inventario.length).toBe(4);
  });

});