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
