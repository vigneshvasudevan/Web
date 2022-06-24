// Why do we need a variable?
// When we intend to use a value more than once
// we need to preserve it.



// What is a variable ?
// Variable is required to hold and manipulate value


// Different ways to declare a variable in JS


// Using var
// Syntax: var <variablename> = <value>;
/* Note: 
    1. Angular braces here i.e, < > indicates
        it's not a JS keyword rather user defined
    2. variable name must start with _(underscore)
    (0-9), (a-z) or (A-Z) 

    3. variable name can't be JS reserved keyword
    like 'for' & 'if

    4. Just like most of other programming language
    JS variable name is case-sensitive, In other words
    var x = 10; var X = 10; are treated as two
    different variables

*/

var x = 10; // variable declaration
x = x + 20; // variable usage

//using let
// Syntax: let <variablename> = <value>;
let y = 20;

//Difference b/w var and let
var foo = 10; 
var foo = 20; // This is allowed, infact it is seen as 'usage' rather re-declaration
console.log('Foo= ' + foo);

let bar = 200;
//let bar = 300; This is illegal; It is seen like re-declaration
console.log('Bar= ' + bar);
// There is more to var vs let, we will cover it 
// after we look at functions


const y = 75;
// y = 90 ; illegal since 'y is const. 
// re-assigning new value to y is illegal


// Duck typing or dynamic typing
var z = 200; // here 'z' is seen as a number
z = 'some text'; // here 'z' is seen as a string

// vanilla JS is not strictly typed unlike other 
// programming language 
