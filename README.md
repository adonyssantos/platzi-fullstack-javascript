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
