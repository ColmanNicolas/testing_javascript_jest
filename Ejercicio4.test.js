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

  afterAll(() => {
    console.log(`
      ===============================================================
      RESPUESTAS CONCEPTUALES - SECCIÓN 4 (USO DE FIXTURES)
      
      Pregunta 1: Defina usando palabras propias y según la práctica realizada qué es un fixture.
      Respuesta 1: 
        - Un fixture es un estado inicial controlado y reproducible de que se configura al principio para ejecutar pruebas. Tiene el proposito de garantizar que el test siempre comience con las mismas condiciones, por ejemplo, una instancia de una clase precargada. 

      Pregunta 2: ¿Qué ventajas ve en el uso de fixtures?
      Respuesta:
        - Reduce la duplicación de código, cada test puede servirse de las mismas instancias iniciales para ejecutarse sin alterar el estado global. Por lo que tambien garantiza la independencia y aislamiento entre pruebas

      Pregunta 3: ¿Qué enfoque de diseño de pruebas estaríamos aplicando (caja negra/blanca)?
      Respuesta:
        Se aplica predominantemente un enfoque de CAJA NEGRA. La preparación de los datos y las 
        verificaciones se realizan interactuando exclusivamente a través de la interfaz pública 
        de las clases (métodos como agregarProducto o buscarProducto), tratándolas como módulos 
        funcionales sin depender de cómo están implementadas sus estructuras algorítmicas internas.

      Pregunta 4: Explique los conceptos de Setup y Teardown en testing.
      Respuesta:
        - Setup (en Jest: beforeEach / beforeAll): Es la fase previa de preparación donde se inicializan 
          variables, se crean instancias de objetos, se cargan datos de prueba o se abren conexiones necesarias.
        - Teardown (en Jest: afterEach / afterAll): Es la fase posterior de limpieza o desmantelamiento 
          donde se eliminan datos temporales, se cierran conexiones (bases de datos, archivos) o se restablecen 
          estados globales para no dejar residuos ni afectar ejecuciones posteriores.
      ===============================================================
    `);
  });
});