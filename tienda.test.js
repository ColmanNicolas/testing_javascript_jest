const { Tienda } = require('./tienda');
const { Producto } = require('./producto');

describe('Pruebas básicas de la clase Tienda', () => {

    test('Debe eliminar un producto existente del inventario', () => {
        // 1. Preparar
        const miTienda = new Tienda();
        const producto = new Producto('Mouse', 20000, 'Periféricos');
        miTienda.agregarProducto(producto);

        // 2. Actuar
        // Ejecutas el método eliminar_producto
        const resultado = miTienda.eliminarProducto('Mouse');

        // 3. Afirmar
        expect(resultado).toBe(true); // El método debe confirmar la eliminación
        expect(miTienda.inventario.length).toBe(0); // El inventario debe quedar vacío
        expect(miTienda.buscarProducto('Mouse')).toBeNull(); // Confirmamos que ya no se encuentra
    });

    test('Debe retornar false al intentar eliminar un producto que no existe', () => {
        // 1. Preparar
        const miTienda = new Tienda();
        const producto = new Producto('Auriculares', 45000, 'Audio');
        miTienda.agregarProducto(producto); // Tenemos un producto, pero intentaremos borrar otro

        // 2. Actuar
        const resultado = miTienda.eliminarProducto('Silla Gamer');

        // 3. Afirmar
        expect(resultado).toBe(false); // No pudo eliminarlo porque no existe
        expect(miTienda.inventario.length).toBe(1); // El inventario sigue intacto
    });

    afterAll(() => {
        console.log(`
      ===============================================================
      RESPUESTA CONCEPTUAL - SECCIÓN 1
      Pregunta: ¿Puedes identificar pruebas de unidad y de integración en la práctica que se realizó?
      
      Respuesta: En esta primera práctica solo hemos realizado pruebas de UNIDAD, 
      ya que estamos testeando el comportamiento de métodos individuales 
      (agregar, buscar y eliminar) de forma aislada.
      ===============================================================
    `);
    });
});

