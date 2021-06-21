# Curso de Asincronismo con JavaScript (Resumen)

## Qué es Asincronismo?

Resulta que JavaScript es un lenguaje de programación asíncrono. Lo que quiere decir esto es que al ejecutar código JavaScript el hilo de ejecución continuará a pesar de encontrarse en situaciones en las que no obtenga un resultado inmediatamente. Por ejemplo, cuando hacemos el pedido de información a un servidor, la respuesta posiblemente demore un poco. Sin embargo, el hilo de ejecución de JavaScript continuará con las demás tareas que hay en el código.

Un ejemplo practico de esto seria una aplicación web que necesita llenar una tabla de datos, asi que el código hará un pedido al servidor de los datos que necesita llenar. Pero el hilo de ejecución no se detiene asi que ejecutará el código que pinta la tabla en el navegador. Esto se convierte en un problema ya que los datos del servidor llegan después de que la tabla se haya pintado en pantalla, una tabla sin datos obviamente.

Asi que trabajar con código asíncrono puede tener muchas ventajas pero en casos como este presenta un gran problema. Pues bien, para solucionar esto algunas funciones de JavaScript tienen como parámetro algo que se conoce como callback, que estudiaremos a continuación.

![](https://static.platzi.com/media/user_upload/1%2AgKhbOEXeeaRCRarHgs9XLg-9f852903-9ce0-4550-8663-a3b137225201.jpg)

## Algunos términos que debemos conocer

**API**

Interfaz de programación de aplicaciones en inglés _Application Programming Interface_. Es un conjunto de rutinas que provee acceso a funciones de un determinado software.

**Concurrencia**

Cuando dos o más tareas progresan simultáneamente.

**Paralelismo**

Cuando dos o más tareas se ejecutan, literalmente, a la vez, en el mismo instante de tiempo.

**Bloqueante**

Una llamada u operación bloqueante no devuelve el control a nuestra aplicación hasta que se ha completado. Por tanto el thread queda bloqueado en estado de espera.

**Síncrono**

Es frecuente emplear `bloqueante` y `síncrono` como sinónimos, dando a entender que toda la operación de entrada/salida se ejecuta de forma secuencial y, por tanto, debemos esperar a que se complete para procesar el resultado.

**Asíncrono**

La finalización de la operación I/O se señaliza más tarde, mediante un mecanismo específico como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta sea procesada en diferido.

**Call Stack**

La pila de llamadas, se encarga de albergar las instrucciones que deben ejecutarse. Nos indica en que punto del programa estamos, por donde vamos.

**Heap**

Región de memoria libre, normalmente de gran tamaño, dedicada al alojamiento dinámico de objetos. Es compartida por todo el programa y controlada por un recolector de basura que se encarga de liberar aquello que no se necesita.

**Queue o Cola**

Cada vez que nuestro programa recibe una notificación del exterior o de otro contexto distinto al de la aplicación, el mensaje se inserta en una cola de mensajes pendientes y se registra su callback correspondiente.

**Eventloop o Loop de eventos**

Cuando la pila de llamadas (call stack) se vacía, es decir, no hay nada más que ejecutar, se procesan los mensajes de la cola. Con cada ‘tick’ del bucle de eventos, se procesa un nuevo mensaje.

**Hoisting**

Sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código en tiempo de compilación.

**DOM**

DOM permite acceder y manipular las páginas XHTML como si fueran documentos XML. De hecho, DOM se diseñó originalmente para manipular de forma sencilla los documentos XML.

**XML**

Lenguaje de marcado creado para la transferencia de información, legible tanto para seres humanos como para aplicaciones informáticas, y basado en una sencillez extrema y una rígida sintaxis. Así como el HTML estaba basado y era un subconjunto de SGML, la reformulación del primero bajo la sintaxis de XML dio lugar al XHTML; XHTML es, por tanto, un subconjunto de XML.

**Events**

Comportamientos del usuario que interactúa con una página que pueden detectarse para lanzar una acción, como por ejemplo que el usuario haga click en un elemento (onclick), que elija una opción de un desplegable `onselect`, que pase el ratón sobre un objeto `onmouseover`, etc.

**Compilar**

Compilar es generar código ejecutable por una máquina, que puede ser física o abstracta como la máquina virtual de Java.

**Transpilar**

Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el
original.
