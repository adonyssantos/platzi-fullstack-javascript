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
