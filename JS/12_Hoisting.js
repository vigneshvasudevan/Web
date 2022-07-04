/* Hoisting

Hoisting refers to the process whereby the interpreter appears to 
move the declaration of functions, variables or classes to the top of their scope, 
prior to execution of the code.

*/


/* Function hoisting: One of the advantages of hoisting is that it 
    lets you use a function before you declare it in your code.

    If hoisting isn't there then we have to declare the function
    before and call them. like 


    function print(msg) {
        console.log('Receievd' + msg);
    }

    print("foo");


*/


print("foo");

function print(msg) {
  console.log('Receievd' + msg);
}

/*
Variable hoisting
Hoisting works with variables too, so you can use a 
variable in code before it is declared and/or initialized.


*/
console.log(num); // Returns 'undefined' from hoisted var declaration not 1
var num; // Declaration
num = 1; // Initialization
console.log(num); // Returns 1 after the line with initialization is executed.



console.log(num2); // Returns 'undefined' from hoisted var declaration (not 2)
var num2 = 2; // Initialization and declaration.
console.log(num2); // Returns 2 after the line with initialization is executed.


// If we forget the declaration altogether (and only initialize the value) the 
// variable isn't hoisted. Trying to read the variable before it is initialized 
// results in ReferenceError exception.
console.log(num3); // Throws ReferenceError exception - the interpreter doesn't know about `num3`.
num3 = 6; // Initialization


/* let and const hoisting
  Variables declared with let and const are also hoisted but, 
  unlike var, are not initialized with a default value. 
  An exception will be thrown if a variable declared with let or const is read before 
  it is initialized.

*/

console.log(num4); // Throws ReferenceError exception as the variable value is uninitialized
let num4 = 4; // Initialization


