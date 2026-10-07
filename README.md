# testing_javascript_jest
## Sección 1: Pruebas Unitarias Básicas

### Pregunta Conceptual
> **¿Puedes identificar pruebas de unidad y de integración en la práctica que se realizó?**

### Respuesta
En esta primera etapa se realizaron exclusivamente **pruebas de unidad**. El objetivo se centró en validar de forma aislada el comportamiento individual de los métodos base de la clase `Tienda`:
* `agregarProducto`
* `buscarProducto`
* `eliminarProducto`


## Sección 2

### Pregunta
> **¿Podría haber escrito las pruebas primero antes de modificar el código de la aplicación? ¿Cómo sería el proceso de escribir primero los tests? Describe el proceso con tus palabras.**

### Respuestas
* **Respuesta 1:**  
  Sí, es posible escribir las pruebas con anticipación si se acuerdan los nombres de las funciones a implementar y los retornos esperados, incluido el tipo de excepciones.

* **Respuesta 2:**  
  Yo creo que el proceso sería determinar las clases que van a estar involucradas en el test, sacar desde la etapa de diseño o acordar con los programadores los nombres de las funciones que se van a implementar y que en este caso se quieren testear. También determinar los retornos esperados y ya por último también debe coincidir el tipo de excepción que se genera y la que espero recibir.

## Sección 4: Uso de Fixtures

### Pregunta 1
> **Defina usando palabras propias y según la práctica realizada qué es un fixture.**

### Respuesta 1
* Un fixture es un estado inicial controlado y reproducible que se configura al principio para ejecutar pruebas. Tiene el propósito de garantizar que el test siempre comience con las mismas condiciones, por ejemplo, una instancia de una clase precargada.

### Pregunta 2
> **¿Qué ventajas ve en el uso de fixtures?**

### Respuesta 2
* Reduce la duplicación de código, cada test puede servirse de las mismas instancias iniciales para ejecutarse sin alterar el estado global. Por lo que también garantiza la independencia y aislamiento entre pruebas.

### Pregunta 3
> **¿Qué enfoque de diseño de pruebas estaríamos aplicando (caja negra/blanca)?**

### Respuesta 3
Se aplica predominantemente un enfoque de **CAJA NEGRA**. La preparación de los datos y las verificaciones se realizan interactuando exclusivamente a través de la interfaz pública de las clases (métodos como `agregarProducto` o `buscarProducto`), tratándolas como módulos funcionales sin depender de cómo están implementadas sus estructuras algorítmicas internas.

### Pregunta 4
> **Explique los conceptos de Setup y Teardown en testing.**

### Respuesta 4
* **Setup (en Jest: `beforeEach` / `beforeAll`):** Es la fase previa de preparación donde se inicializan variables, se crean instancias de objetos, se cargan datos de prueba o se abren conexiones necesarias.
* **Teardown (en Jest: `afterEach` / `afterAll`):** Es la fase posterior de limpieza o desmantelamiento donde se eliminan datos temporales, se cierran conexiones (bases de datos, archivos) o se restablecen estados globales para no dejar residuos ni afectar ejecuciones posteriores.

## Sección 5

### Pregunta 1
> **¿Realizó una prueba de cobertura completa? ¿Qué tipo de cobertura utilizó?**

### Respuesta
Se analizó la cobertura mediante la herramienta nativa de Jest (Istanbul). Se evalúan cuatro métricas: Statement coverage (líneas ejecutadas), Branch coverage (caminos de condicionales if/else recorridos), Function coverage (funciones invocadas) y Line coverage. Al ejecutar todas las suites de prueba se busca alcanzar una cobertura cercana al 100% en las clases bajo prueba.

### Pregunta 2
> **¿Puede describir una situación de desarrollo para este caso en donde se plantee pruebas de integración ascendente? Describa la situación.**

### Respuesta
En la integración ascendente, se prueban primero los componentes o funciones de nivel inferior de la jerarquía, que deben tener responsabilidades muy atómicas y específicas. Luego se construyen flujos lógicos que hacen uso de estos componentes para cumplir tareas de complejidad superior, que dependen de múltiples fuentes, validaciones y flujos alternativos.

**Situación en este proyecto:**
1. Primero se prueba y valida de forma aislada la clase 'Producto', verificando que se puedan instanciar objetos de forma estable
2. Una vez que el comportamiento de 'Producto' se valida, se integra con la clase 'Tienda' (nivel superior que depende de Producto) y se crean operaciones básicas ABM para gestionar el flujo de Objetos 'producto' que pertenecen a mi variable inventario dentro de 'Tienda'.
3. Cuando 'Tienda' pueda gestionar las operaciones básicas ABM de manera estable, se integran flujos para lanzar y capturar excepciones dentro de mis funciones base para complementar y reforzar el comportamiento esperable de mi clase.
4. En pasos posteriores se crean funciones más complejas como 'aplicarDescuento' y 'calcularTotalCarrito' que integran funciones básicas del ABM de productos. En esta etapa se busca cumplir con requerimientos de logica del negocio proyectadas para el sistema.
