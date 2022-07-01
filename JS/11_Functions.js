/*
What is a function?
A set of statements that performs a task

Why do we need a function ?
When we see same piece of code used at multiple places, 
we could consider creating a function and calling it.


How to use them?
Syntax: 

    // Function declaration/definition
    function foo(arg1, arg2) {
        <some code>
        return <OptionallySomething>
    }

    // Calling function
    foo(100, 200);

*/


function power(num, exponent) {
    return num*exponent;
}
console.log(power(5, 2));

//Function like expressions
let pow = function(num, exponent) {
    return num*exponent;
}
console.log(pow(5, 2));

// Default value in arguments
function functionWithDefaultValue (x = 20, y) {
    console.log(x,y);
}

functionWithDefaultValue(10); // Output: 10, undefined
functionWithDefaultValue(10, 30); // Output: 10, 30


// Variable length arguments
function foo() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
foo (1, 2, 3, 4);
foo([10, 20, 30])

function bar(...args) {
    // args is an Array
    console.log(args);
}

bar(1, 2, 3, 4);

function baz(x, ...args) {
    console.log("x=", x);
    console.log("args=", args);
    console.log("Argument object has =", arguments)
}

baz(10, 20, 30, 40)


// Closures
function outerfunction() {
    const mesg = 'Text message'; // name is a local variable created by foo
    function print() { // print() is the inner function, a closure. won't be seen outside
        console.log(mesg); // use variable declared in the parent function
    }
    print();
}

outerfunction();


// Using closures for decorating function
function raisePower(x) {
    return function(y) {
      return y ** x;
    };
}
  
let squarer = raisePower(2);
let cuber = raisePower(3);

console.log(squarer(2));  
console.log(cuber(2));


/* 'this' keyword
In most cases, the value of this is determined by how a function is called 
(runtime binding)


In browser:
    this === window; // true

In Node:
    this === globalThis; // true

*/


const test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
};
  
console.log(test.func());
console.log(this === window); // true on browser

var a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b) 
console.log(b)


/* Function context:
    Functions in JavaScript run in a specific context, 
    and using the this variable we have access to it.
*/
const person = {
    name : "foo"
};

function printName()
{
    console.log(this.name); // this wont work
}

/* Bind: To bind a function to an object and make it an object method.
*/

var boundPrintName = printName.bind(person); //printName is now bound to 'person'
boundPrintName();  // will print 'foo'

// Call: Calling a function with a different context
printName.call(person);      // will print 'foo'

/* 
Note:
printName.call(person);     //is the same as
printName.bind(person)();   //executes the function returned by bind

Or think of bind returning a shortcut to call.

For example:

var boundPrintName = printName.bind(person); 
boundPrint
var boundPrintName = function()
{
    printName.call(person);
}

*/


/* Apply: Similar to call but instead of taking separate args
 it takes args as an array

*/

const nums = [1, 2, 3, 4, 5];
const min = Math.min.apply(null, nums); // same as Math.min.call(null, ...nums)
console.log(min);


// Callback function: Functions usually passed as an args to another function
var cbFunc = function() {
    console.log("Done!");
}
setTimeout(cbFunc, 5000);


/* Arrow function:  are anonymous functions with a special syntax, 
they don't have their own this, arguments or super.

Syntax: (arg1, arg2) => { //somecode } 

*/

const adder = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        return 0;
    }
    return num1+num2;
}
console.log(adder(5, 2));

const IsOdd = num => {
        if (num%2 ==0) {
            return false;
        }
        return true;
    }

console.log(IsOdd(100));


// Note:
// 1. By default when it's one args now need to put () to capture arg 
// 2. when it is just one statement in side {} the return is implict, no need to say return
const IsEven = num => { num%2 == 0}
console.log(IsEven(100));



// Map, reduce, filter
const numbers= [1,2,3,4,5];
let doubled  = numbers.map(n => n * 2);
console.log(doubled); // [2,4,6,8,10]
var greaterThan3 = numbers.filter(n => n > 3);
console.log(greaterThan3); // [4,5]
let sumOfAll = numbers.reduce((sum, curVal) => curVal + sum);
console.log(sumOfAll) // 15
