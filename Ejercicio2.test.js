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


});