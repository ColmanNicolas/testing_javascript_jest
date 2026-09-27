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

  afterAll(() => {
    console.log(`
      ===============================================================
      RESPUESTA CONCEPTUAL - SECCIÓN 3
      Pregunta 1: En lo que va del trabajo práctico, ¿puedes identificar 'Controladores' y 'Resguardos'?
      Respuesta 1: 
        - Controlador (Driver): Es el framework de testing (Jest) junto con los archivos de prueba (.test.js), que estimulan y ejecutan las clases bajo prueba.
        - Resguardo (Stub/Mock): Es el objeto simulado 'productoMock', que reemplaza la dependencia real de la clase Producto para aislar a la clase Tienda durante la prueba.

      Pregunta 2: ¿Qué es un "test double"? ¿Hay otros nombres para los objetos/funciones simulados?
      Respuesta 2: 
        Un "test double" es un término genérico para cualquier objeto ficticio que sustituye a un componente real en una prueba de software para aislar la unidad bajo prueba o evitar efectos colaterales.
        Otros tipos de dobles incluyen: Dummy, Stub, Spy, Mock y Fake.
      ===============================================================
    `);
  });

});