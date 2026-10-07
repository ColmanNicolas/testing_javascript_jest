# Trabajo Práctico: Testing Automatizado con Jest

## Índice

- [Sección 1: Pruebas Unitarias Básicas](#sección-1-pruebas-unitarias-básicas)
- [Sección 2: TDD y Excepciones](#sección-2-tdd-y-excepciones)
- [Sección 3: Dobles de Prueba (Mocks)](#sección-3-dobles-de-prueba-mocks)
- [Sección 4: Uso de Fixtures](#sección-4-uso-de-fixtures)
- [Sección 5: Integración y Cobertura](#sección-5-integración-y-cobertura)
- [Instrucciones de Ejecución y Notas Técnicas](#instrucciones-de-ejecución-y-notas-técnicas)

---

# sección-1-pruebas-unitarias-básicas

### Pregunta Conceptual
> **¿Puedes identificar pruebas de unidad y de integración en la práctica que se realizó?**

### Respuesta
En esta primera etapa se realizaron exclusivamente **pruebas de unidad**. El objetivo se centró en validar de forma aislada el comportamiento individual de los métodos base de la clase `Tienda`:

- `agregarProducto`
- `buscarProducto`
- `eliminarProducto`

---

## Sección 2: TDD y Excepciones

### Pregunta
> **¿Podría haber escrito las pruebas primero antes de modificar el código de la aplicación? ¿Cómo sería el proceso de escribir primero los tests? Describe el proceso con tus palabras.**

### Respuestas

* **Respuesta 1:**  
  Sí, es posible escribir las pruebas con anticipación si se acuerdan los nombres de las funciones a implementar y los retornos esperados, incluido el tipo de excepciones.

* **Respuesta 2:**  
  Yo creo que el proceso sería determinar las clases que van a estar involucradas en el test, sacar desde la etapa de diseño o acordar con los programadores los nombres de las funciones que se van a implementar y que en este caso se quieren testear. También determinar los retornos esperados y ya por último también debe coincidir el tipo de excepción que se genera y la que espero recibir.

---

## Sección 3: Dobles de Prueba (Mocks)

### Pregunta 1

> **En lo que va del trabajo práctico, ¿puedes identificar 'Controladores' y 'Resguardos'?**

### Respuesta 1

* **Controlador (Driver):** Es el framework de testing (Jest) junto con los archivos de prueba (`.test.js`), que estimulan y ejecutan las clases bajo prueba.
* **Resguardo (Stub/Mock):** Es el objeto simulado `productoMock`, que reemplaza la dependencia real de la clase `Producto` para aislar a la clase `Tienda` durante la prueba.

### Pregunta 2

> **¿Qué es un "test double"? ¿Hay otros nombres para los objetos/funciones simulados?**

### Respuesta 2

Un "test double" es un término genérico para cualquier objeto ficticio que sustituye a un componente real en una prueba de software para aislar la unidad bajo prueba o evitar efectos colaterales.

Otros tipos de dobles incluyen: Dummy, Stub, Spy, Mock y Fake.

---

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

---

## Sección 5: Integración y Cobertura

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

---

## Instrucciones de Ejecución y Notas Técnicas

### Prerrequisitos

Tener instalado Node.js (versión 16 o superior) y npm en el sistema.

* **Descarga oficial:**  
  [https://nodejs.org/](https://nodejs.org/) (incluye npm automáticamente).

* **Instalación por terminal:**
  * **Windows (con winget):**
    winget install OpenJS.NodeJS.LTS
  * **Linux (Ubuntu/Debian):**
    sudo apt update && sudo apt install nodejs npm
  * **macOS (con Homebrew):**
    brew install node

* **Verificación de versiones instaladas:**
  node -v
  npm -v

### 1. Clonar el repositorio

Abrir la terminal y clonar el proyecto:

git clone https://github.com/ColmanNicolas/testing_javascript_jest.git
cd testing_javascript_jest

### 2. Instalación de dependencias

Instalar las dependencias del proyecto (incluyendo Jest y sus herramientas de cobertura):

npm install

> Este comando creará la carpeta node_modules con todas las librerías necesarias especificadas en package.json.

### 3. Ejecución de pruebas

#### Ejecución global de todos los tests

Para ejecutar todas las suites de prueba juntas, mostrando por terminal si cada suite pasa todos sus test o si fallan en alguno:

npm test

#### Ejecución individual por ejercicio

Para probar cada sección de forma aislada e independiente, pudiendo visualizar el detalle de todos los test que corren dentro de cada suite:

- Sección 1 (Pruebas unitarias básicas):
  npx jest ejercicio1.test.js

- Sección 2 (Excepciones y TDD):
  npx jest ejercicio2.test.js

- Sección 3 (Dobles de prueba / Mocks):
  npx jest ejercicio3.test.js

- Sección 4 (Fixtures con beforeEach):
  npx jest ejercicio4.test.js

- Sección 5 (Integración):
  npx jest ejercicio5.test.js

### 4. Reporte de Cobertura de Código (Code Coverage)

Para generar el reporte detallado de cobertura en consola mediante Istanbul:

npx jest --coverage

Adicionalmente, se generará una carpeta llamada coverage/ en la raíz del proyecto. Se puede abrir el archivo coverage/lcov-report/index.html en cualquier navegador web para inspeccionar la cobertura visual línea por línea.

---

## Nota Técnica sobre la Evolución Incremental del Código

> Aclaración sobre la ejecución global:  
> Al correr el comando global npm test o el análisis completo con npx jest --coverage, es posible notar que ciertas aserciones del archivo ejercicio1.test.js fallan.  
>  
> Causa técnica:  
> - En la Sección 1, la especificación inicial establecía que los métodos de búsqueda o eliminación debían retornar valores booleanos (false) o null ante elementos no encontrados.  
> - A partir de la Sección 2, el diseño del sistema evolucionó mediante TDD hacia un manejo estricto de excepciones de dominio (throw new Error(...)), modificando la firma y comportamiento de los métodos en tienda.js.  
>  
> Los archivos de prueba representan la evidencia histórica del avance incremental a lo largo de las distintas etapas de la guía práctica. Las suites correspondientes a las secciones 2, 3, 4 y 5 validan el contrato definitivo de la aplicación de manera consistente.
> El registro de evolución del trabajo practico se puede validar en los commits realizados para cada sección completada
