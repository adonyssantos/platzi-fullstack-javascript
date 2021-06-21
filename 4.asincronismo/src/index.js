// Un callback es simplemente una función que se pasa como parámetro a otra función. Nosotros podemos construir funciones que usen callbacks de la siguiente manera.
const saludar = (saludo) => saludo();
const printSaludo = (nombre = "Adonys") => console.log(`Hola ${nombre}`);

saludar(printSaludo);

// Una función en JavaScript que tiene un callback es el setTimeout(). Esta función ejecuta el callback después de esperar cierto tiempo el cual también le pasamos como parámetro.

const sayHello = () => console.log("Hola");

// setTimeout(función, tiempo_ms);
setTimeout(sayHello, 2000);

// Esta función ejecuta el callback solo después de que hayan pasado 2000 milisegundos.

// Con ayuda de esta función podemos crear un código que nos permita visualizar la asíncrona de JavaScript.

console.log("A");
setTimeout(() => console.log("B"), 2000);
console.log("C");
/* Resultado del código anterior
 A
 C
 B  Después de 2 segundo*/

// La asíncrona de JavaScript nos permite visualizar en consola la letra C mucho antes de la B, el cual demora 2 segundos. Como puedes ver la ejecución no se detiene dos segundos, esta continua y luego de dos segundos aparece C.

// Para tener un cierto control en el código asíncrono de JavaScript existen las promesas, las cuales estudiaremos a continuación.

// Las promesas llegan a JavaScript en la versión 6 de EcmaScript. Una promesa es el objeto que representa un valor que estará disponible ahora, en el futuro o quizá nunca. Entonces como no sabemos cuando estarán disponibles. Por esta razón dejamos preparado dentro de la promesa el código que se ejecutará cuando el resultado llegue o incluso cuando el resultado es un error.

// Podemos crear una promesa de la siguiente manera.

let x = 10;
const p = new Promise((resolve, reject) => {
  if (x == 10) {
    resolve("La variable es igual a 10");
  } else {
    reject("La variable no es igual a 10");
  }
});

// En la función flecha del código anterior tenemos dos parámetros, el primer parámetro `resolve` es una función que recibe como parámetro el objeto que queremos que devuelva cuando el código tuvo el resultado que esperamos. Mientras que `reject` es una función que toma como parámetro el objeto que devolverá si obtenemos un error, en nuestro código asincronico.

// En resumen usando una promesa podemos recibir el resultado que necesita de una espera y ejecutar código luego de que el resultado llegue. Entonces probemos las promesas con el `setTimeout`.

let mensaje = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Este es el mensaje"), 2000);
});

// De esta forma creamos un objeto promesa con el mensaje como resultado `resolve` favorable de la promesa que devolverá luego de 2 segundos. Ahora para controlar la promesa usamos el método `then` y `catch` que vienen junto con las promesas.

mensaje.then((msg) => console.log(msg)).catch(() => console.log("error"));

// Entonces para capturar el resultado favorable de la promesa usamos `then()`. En nuestro caso se trata del mensaje que lo mostraremos usando un `console.log()`. Por otra parte el `catch` captura el resultado fallido o `reject` de la promesa. En nuestro caso no implementamos ninguno asi que nuestra función dentro del `catch` no recibe ningun parametro y solo muestra el mensaje de error.

// Listo ya sabemos que una promesa es como un tipo de dato y es por este motivo que muchas funciones de JavaScript y/o de librerias externas cuyo resultado es asincrono osea que demorará un tiempo en llegar están inplementados en promesas. Uno de estos métodos es `fetch`.

// El método Fetch nos permite hacer una petición a un API y es justamente un callback. Por lo que tenemos que recibirlo usando `then` y `catch` de la siguiente forma.

let pokemones = fetch("https://pokeapi.co/api/v2/pokemon/1"); // Esto devuelve una promesa

pokemones
  .then((response) => response.json())
  .then((data) => {
    console.log(data.name);
  })
  .catch((error) => console.log(error));

// Como puedes ver en el código anterior se pueden encadenar métodos `then`, pero se pueden hacer solo cuando el return del `then` anterior es una promesa. En este caso si nosotros vemos la implementación de `json()` veremos que este método devuelve una promesa. Por lo que el segundo then es la captura del `resolve` del `json()`. Asi que si intentamos descomponer más al código anterior tendríamos algo asi.

// REFERENCIAS: https://andygeek.com/posts/Mis%20apuntes%20JavaScript/posts/Asincronismo-en-javascript/
