const { Producto } = require('./producto');
const { Tienda } = require('./tienda');

describe('Pruebas Ejercicio 2', () => {

    test('Debe retornar el producto cuando existe en el inventario', () => {
        // Arrange
        const tienda = new Tienda();
        const prod = new Producto('Monitor', 100, 'Periféricos');
        tienda.agregarProducto(prod);

        // Act
        const resultado = tienda.buscarProducto('Monitor');

        // Assert
        expect(resultado).toBe(prod);
        expect(resultado.precio).toBe(100);
    });

    test('Debe lanzar una excepción si el producto buscado no fue encontrado', () => {
        const tienda = new Tienda();

        expect(() => {
            tienda.buscarProducto('Mouse');
        }).toThrow("Producto 'Mouse' no encontrado");
    });


    test('Debe retornar true cuando un producto se elimina correctamente', () => {
        const tienda = new Tienda();
        const prod = new Producto('Monitor', 100, 'Periféricos');
        tienda.agregarProducto(prod);

        const resultado = tienda.eliminarProducto('Monitor');

        expect(resultado).toBe(true);
        expect(tienda.inventario.length).toBe(0);
    });

    test('Debe lanzar una excepción si el producto no pudo ser eliminado', () => {
        const tienda = new Tienda();

        expect(() => {
            tienda.eliminarProducto('Mouse');
        }).toThrow("Producto 'Mouse' no pudo ser eliminado");
    });

    test('Debe actualizar el precio correctamente si es un valor positivo', () => {
        const prod = new Producto('Monitor', 100, 'Periféricos');
        const nuevoPrecio = 150;

        prod.actualizarPrecio(nuevoPrecio);
        expect(prod.precio).toBe(nuevoPrecio);
    });

    test('Debe lanzar una excepción si el nuevo precio es negativo', () => {
        const prod = new Producto('Monitor', 100, 'Periféricos');

        expect(() => {
            prod.actualizarPrecio(-50);
        }).toThrow("El precio no puede ser negativo");
    });



    afterAll(() => {
        console.log(`
      ===============================================================
      RESPUESTA CONCEPTUAL - SECCIÓN 2
      Pregunta: Podría haber escrito las pruebas primero antes de modificar el código de la aplicación?
      ¿Cómo sería el proceso de escribir primero los tests? Describe el proceso con tus palabras.

      
      Respuesta1: Si, es posibles escribir las pruebas con anticipacion si se acuerda los nombres de las funciones a implementar y los retornos esperados, incluido el tipo de excepciones.
      Respuesta2: Yo creo que el proceso seria determinar las clases que van a estar involucradas en el test, sacar desde la etapa de diseño o acordar con los programadores los nombres de las funciones que se van a implementar y que en este caso se quieren testear. Tambien determinar los retornos esperados y ya por ultimo tambien debe coincidir el tipo de excepcion que se genera y la que espero recibir 
      ===============================================================
    `);
    });
});