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
