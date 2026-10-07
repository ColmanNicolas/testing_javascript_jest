const { Tienda } = require('./tienda');

describe('Pruebas Ejercicio 3 - Dobles de prueba (Mocks)', () => {

  test('Debe calcular el descuento y llamar a actualizarPrecio con el mock', () => {
    const tienda = new Tienda();

    const productoMock = {
      nombre: 'Monitor',
      precio: 1000,
      actualizarPrecio: jest.fn()
    };

    tienda.agregarProducto(productoMock);

    tienda.aplicarDescuento('Monitor', 20);

    // Verificamos que se llamó exactamente una vez
    expect(productoMock.actualizarPrecio).toHaveBeenCalledTimes(1);

    // Verificamos que el valor calculado enviado sea 800 (1000 - 200)
    expect(productoMock.actualizarPrecio).toHaveBeenCalledWith(800);
  });

  test('Debe lanzar una excepción si el porcentaje es inválido', () => {
    const tienda = new Tienda();

    expect(() => {
      tienda.aplicarDescuento('Monitor', 150);
    }).toThrow("Porcentaje debe ser un valor positivo entre 0 y 100");
  });


});