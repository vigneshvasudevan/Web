/* Var vs Let

The main difference is scoping rules. Variables declared by var keyword are scoped to 
the immediate function body (hence the function scope) while let variables are scoped 
to the immediate enclosing block denoted by { } (hence the block scope).

*/

function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar); // Foo Bar
  
    {
      var moo = "Mooo"
      let baz = "Bazz";
      console.log(moo, baz); // Mooo Bazz
    }
  
    console.log(moo); // Mooo
    console.log(baz); // ReferenceError
}
  
run();

// Global property using 'var'
var foo = "Foo";  // globally scoped
let bar = "Bar"; // not allowed to be globally scoped

console.log(this.foo); // Foo
console.log(this.bar); // undefined

/* 'strict' mode: In strict mode, var will let you re-declare the same variable in the 
    same scope while let raises a SyntaxError.
*/

'use strict';
var foo = "foo1";
var foo = "foo2"; // No problem, 'foo1' is replaced with 'foo2'.

let bar = "bar1"; 
let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared