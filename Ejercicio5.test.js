const { Producto } = require('./producto');
const { Tienda } = require('./tienda');

describe('Pruebas Ejercicio 5 - Pruebas de Integración y Flujo Completo', () => {
  let tienda;

  beforeEach(() => {  // Fixture
    tienda = new Tienda();
    tienda.agregarProducto(new Producto('Monitor', 1000, 'Periféricos'));
    tienda.agregarProducto(new Producto('Mouse', 200, 'Periféricos'));
    tienda.agregarProducto(new Producto('Teclado', 300, 'Periféricos'));
    tienda.agregarProducto(new Producto('Auriculares', 500, 'Audio'));
  });

  test('Debe calcular el total del carrito con productos reales tras aplicar descuentos', () => {
    // 1. Aplicamos descuento del 10% al Monitor (1000 -> 900)
    tienda.aplicarDescuento('Monitor', 10);

    // 2. Aplicamos descuento del 50% al Mouse (200 -> 100)
    tienda.aplicarDescuento('Mouse', 50);

    // 3. Armamos el carrito de compras
    const carrito = ['Monitor', 'Mouse', 'Teclado'];

    // 4. Calculamos el total: 900 + 100 + 300 = 1300
    const total = tienda.calcularTotalCarrito(carrito);

    expect(total).toBe(1300);
  });

  test('Debe lanzar una excepción si el carrito contiene un producto inexistente', () => {
    const carritoInvalido = ['Monitor', 'Webcam'];

    expect(() => {
      tienda.calcularTotalCarrito(carritoInvalido);
    }).toThrow("Producto 'Webcam' no encontrado");
  });

});