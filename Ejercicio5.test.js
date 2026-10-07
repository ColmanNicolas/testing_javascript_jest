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

  afterAll(() => {
    console.log(`
      ===============================================================
      RESPUESTAS CONCEPTUALES - SECCIÓN 5
      
      Pregunta 1: ¿Realizó una prueba de cobertura completa? ¿Qué tipo de cobertura utilizó?
      Respuesta:
        Se analizó la cobertura mediante la herramienta nativa de Jest (Istanbul). Se evalúan 
        cuatro métricas: Statement coverage (líneas ejecutadas), Branch coverage (caminos 
        de condicionales if/else recorridos), Function coverage (funciones invocadas) y 
        Line coverage. Al ejecutar todas las suites de prueba se busca alcanzar una 
        cobertura cercana al 100% en las clases bajo prueba.

      Pregunta 2: ¿Puede describir una situación de desarrollo para este caso en donde se 
      plantee pruebas de integración ascendente? Describa la situación.
      Respuesta:
        En la integración ascendente, se prueban primero los componentes o funciones
        de nivel inferior de la jerarquía, que deben tener responsabilidades muy atomicas y especificas. Luego se construyen flujos logicos que hacen uso de estos componentes para cumplir tares de complejidad superior, que dependen de multiples fuentes, validaciones y flujos alternativos.
        Situación en este proyecto:
          1. Primero se prueba y valida de forma aislada la clase 'Producto', verificando que se puedan instanciar objetos de forma estable.
          2. Una vez que el comportamiento de 'Producto' se valida, se integra con la clase 'Tienda' 
             (nivel superior que depende de Producto) y se crean operaciones basicas ABM para gestionar el flujo de Objetos 'producto' que pertenecen a mi variable inventario dentro de 'Tienda'
          3. Cuando 'Tienda' pueda gestionar las operacion basicas ABM de manera estable, se procede a integrar Flujos para Lanzar y capturar excepciones dentro de mis funciones Base.
          4. En pasos mas posteriores se crean funciones mas complejas como 'aplicarDescuento' y 'calcularTotalCarrito' que integran funciones basicas del ABM de productos para poder cumplir su tarea
             
      ===============================================================
    `);
  });
});