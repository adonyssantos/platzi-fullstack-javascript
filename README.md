# Curso Básico de JavaScript

## Introducción

**JavaScript** es un lenguaje de programación interpretado. Es utilizado en la web, además podemos utilizar frameworks crear Apps para Android, IOS y Desktop. Tambén podemos utilizar JS para el Backend.

## Tipos de datos

```js
// TIPO PRIMITIVO
40; // Number
("Adonys Santos"); // String
true; // Boolean 1
false; // Boolean 0
null; // Null
undefined; // Undefined

// TIPO OBJETO
[1, 2, 3]; // Array
{
  name: "Adonys";
} // Object
```

![Ripos de datos en JavaScript](https://static.platzi.com/media/user_upload/CU01112E_1-f9d2b6fc-f60c-4bf4-a61d-6bf9df36b268.jpg)

**Devuelve el tipo de dato de un valor:**

```js
typeof valor;
```

## Variables y Constante

Un **variable** es un espacio en memoria que se dedica a almacenar un valor. Este valor puede cambiar.

Una variable tiene 2 estados:

1.**Declaración:**
`var age;`

2.**Inicializar:**
`age = 17;`

Una **constante** es un valor que una vez se declara no se puede cambiar.

```js
// Variable Global
var name = "Adonys";
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var users = { full_name: "Adonys", birthday: 0 };

// Variable local
let age = 17;

// Constante
const independenceDay = "February 27th";
```

## Funciones

Las funciones son bloques de código para realizar un proceso. Estas reciben un entrada, realizan un proceso y devuelven un salida. Existen 2 tipos de funciones:

1. Declarativas
2. De expresión

Ambas pueden llevar parámetros, que son los datos que necesitan para ejecutarse. Cada parámetro va separado por una `coma (,)`. Cada instrucción que tenga la función debe terminar con `punto y coma (;)`.

Las funciones declarativas tienen la siguiente sintaxis:

```js
function name(params) {
  //code...
}

// EJEMPLO
function sum(a, b) {
  return a + b;
}
```

Las funciones de expresión son aquellas que guardamos en una variable, por lo tanto, no es necesario nombrarlas y tienen la siguiente sintaxis:

```js
var name = function (params) {
  //code..
};

// EJEMPLO
var sum = function (a, b) {
  return a + b;
};
```

**Diferencias:**

A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

Para ejecutar las funciones debemos usar la siguiente sintaxis:

```js
name(params);

//EJEMPLO
sum(10 + 20); // Resultado 30
```

Si la función no tiene ningún parámetro, únicamente se escribe:

```js
name();
```

En ES6 se implementó las funciones flechas:

```js
// Funciones flecha
const name = () => {
  //code..
};

const sum = (a, b) => {
  //EJEMPLO
  return a + b;
};
```

## Scope

Es el alcance que tienen las variables. Además determina el conjunto de variables que podemos acceder desde una linea de código.

```js
var scopeGlobal = "Scope Goblal";

function fun1() {
  var scopeLocal = "Scope Local 1";
  console.log([scopeGlobal, scopeLocal]); //[ 'Scope Goblal', 'Scope Local 1' ]
}

function fun2() {
  var scopeLocal = "Scope Local 2";
  console.log([scopeGlobal, scopeLocal]); //[ 'Scope Goblal', 'Scope Local 2' ]
}

fun1();
fun2();
console.log([scopeGlobal, scopeLocal]); //ReferenceError: scopeLocal is not defined
```

Vídeo sobre **Scope**:[https://youtu.be/s-7C09ymzK8](https://youtu.be/s-7C09ymzK8)

# Hoisting

Es cuando las variables y funciones se ejecutan antes que cualquier tipo de código. En EC6 esto no sucede ya que tenemos `const` y `let` que hacen el trabajo de las variables y las funciones flechas.

```js
hello(myName); //Hello, undefined

function hello(name) {
  console.log(`Hello, ${name}`);
}

var myName = "Adonys";
```

Debido a que como lo hemos dicho, la variable se tomo en cuenta y se le asigno memoria, sin embargo, el compilador no la inicializo y se le dio el valor de undefined, y con ese valor se ingreso a la funcion, y ya despues de correr la funcion se le asigno el valor.

**Este comportamiendo se puede entender facilmente si se comprenden estos dos puntos esenciales:**

- Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas.
- La declaración de las variables se mueven arriba del scope, pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla.

En base al segundo punto, fue por eso que se cometio el error de usar la variable antes de inicializarla, pues sin problema el compilador le asigna memoria, pero no el valor hasta despues.

Vídeo sobre **Hoisting**: [https://youtu.be/uI6o97A4IrI](https://youtu.be/uI6o97A4IrI)

## Coerción

Es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:

- **Coerción implícita**: es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
- **Coerción explicita**: es cuando obligamos a que cambie el tipo de valor.

```js
//Ejemplos de Coerción:

var a = 4 + "7"; //Convierte a 4 en un string y lo concatena con el "7", por esto regresa un string de valor "47"

4 * "7"; //Convierte al "7" en un número y realiza la operación, por esto devuelve 28

var a = 20;
var b = a + ""; //Aquí concatenamos para convertir la variable a string (coerción implícita)
console.log(b);

var c = String(a); //Aquí obligamos a la variable a convertirse en string (coerción explícita)
console.log(c);

var d = Number(c); //Aquí obligamos a la variable a convertirse en número (coerción explícita)
console.log(d);
```

**ParseInt:** Analiza la cadena desde el primer dígito, hasta que encuentre algo que no sea dígito y devuelve lo que haya analizado.

```js
// Ejemplo
parseInt(“123hui”) //123
```

**Number:** Busca convertir toda la cadena en un número, por lo que al encontrarse con un elemento que no sea diginto nos dara como resultado NAN.

```js
// Ejemplo
Number(“123hui”) //NaN
```

## Truthy y Falsy

Articulo sobre esto: [www.sitepoint.com/javascript-truthy-falsy/](https://www.sitepoint.com/javascript-truthy-falsy/)

_Usamos la función de JS que es Boolean() dentro del paréntesis ponemos el valor y nos dice si el mismo el False o True._

```js
//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function () {}); //Cualquier función es verdadera también
```

## Operadores

Un operador, es un elemento que indica el tipo de operación que se le va a aplicar a uno o más datos.

- **Operadores de comparación** [developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Comparison_Operators](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Comparison_Operators)
- **Operadores aritméticos** [developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Aritméticos](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Aritméticos)
- **Operadores de asignación**
  [developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Assignment_Operators](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Assignment_Operators)

```js
//Operadores binarios:
3 + 2; //Suma
50 - 10; // Resta
10 * 20; //Multiplicación
20 / 2; //División

"Adonys " + "Santos"; //concatenación de strings

//Operadores unitarios:
!false; //negación de la negación = true

//Operadores de asignación:
var a = 1; //Asignamos un valor a la variable

//Operadores para comparar:
3 == "3"; //Compara los valores y devuelve "true" en este caso

3 === "3"; //Compara y valida los tipos y valores. Devuelve "falso" en este caso

5 < 3; //Compara y valida si el 5 es menor a 3
5 > 3; //Compara y valida si el 5 es mayor a 3
5 <= 6; //Compara y valida si el 5 es menor o igual al 6
5 >= 6; //Compara y valida si el 5 es mayor o igual al 6

a && b; //Valida si ambas variables son verdaderas para que se cumpla la condición
a || b; //Aquí se cumple la condición si alguna de las dos variables es verdadera

var edad = 17;
edad++; //Incrementa el valor en 1

edad += 2; //Incrementa el valor por 2
```
