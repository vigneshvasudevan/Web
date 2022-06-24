/* Non-Primitive data types in JS

1. Iterables (to store two or more values)
    a. Arrays
    b. Sets
    c. Maps
2. Objects (commonly termed as JSON)
3. Regex (Regular Expression object)
*/

// 1. Iteratables: 


// a) Arrays:
// Arrays in JS can have elements of same type or different type
let xyz = ['foo', 'bar', 'baz'];
console.log(xyz);
let foo = [100, 'foo', true, undefined, null];
console.log(foo);
console.log('Array \'bar\' length = ', foo.length);

// Adding and deleted elements from array:
console.log('foo before poping an element = ', foo);
foo.pop();  // removes the last element
console.log('foo after poping an element = ', foo);

console.log('Get slice of foo = ', foo.slice(0, 3));

foo.shift();  // removes the first element
console.log('foo after shifting an element = ', foo);

foo.unshift('500');  // Add element to the start
console.log('foo after unshifting an element = ', foo);

foo.push(200); // Add to the end
console.log('foo after pushing an element = ', foo);

// Arrays in JS are 0-based indexing
// In other words first element can be accessed by
// index '0'
console.log('First element in bar is ', foo[0]);
console.log('Last element in bar is ', foo[foo.length-1]);

// Accesing beyond the last element index will return 'undefined'
console.log('Next to last element =', foo[foo.length+1]);


// Const arrays : They can't be assigned to new
// array completely but individual elements can be modified
const bar = [123, 456, 789];
bar[0] = 101112; // is legal
// bar = [101112, 456, 789] is illegal

// More ways to create arrays
let arr1 = new Array(); // empty array
console.log('arr1 =', arr1);
let arr2 = new Array(5); // array of 5 elements size
arr2[0] = 100;
console.log('arr2 =', arr2);
let arr3 = new Array('Java','C','C++'); // array with 3 values
console.log('arr3 =', arr3);

/* More type of array:
    Int8Array
    Uint8Array
    Uint8ClampedArray
    Int16Array
    Uint16Array
    Int32Array
    Uint32Array
    Float32Array
    Float64Array
    BigInt64Array
    BigUint64Array
*/


// b) Sets
// Unlike array sets will allow only unique values
// Unlike sets in other programming language, it can
// contains entries of different types. Both primitive 
// and non-primitive types can be stored

const s = new Set();
// Add an entry to sets
s.add(1);
s.add(true);
s.add('foo');
s.add(new Object());
console.log('Set elements are', s.values);
console.log('Set size before delete = ', s.size);
//Delete an entry from set
s.delete(true);
console.log('Set size after delete = ', s.size);
// To check if set has a thing
console.log('Does set has 1 ? Ans: =', s.has(1));
console.log('Does set has 2 ? Ans: =', s.has(2));


// c) Maps
// Map object holds key-value pairs and 
// remembers the original insertion order of the 
// keys. Any value (both objects and primitive 
// values) may be used as either a key or a value

const m = new Map();

m.set('foo', 100);
m.set('bar', 200);
m.set('baz', 100);
console.log('Map contains', m);
console.log('Value found at key \'baz\'= ' + m.get('baz'));
m.set('baz', 300);
console.log('Value found at key \'baz\'= ' + m.get('baz'));
console.log('Value found at key which doesnot exist in map = ' + m.get('hlkf'));

console.log(m.size);
m.delete('baz');
console.log(m.size);




// 2. Objects:
// aka(also known as) Java script object notation(JSON)
// They are very close to hash map/dictionaries


/* Using Object constructor */
let obj1 = new Object();
/* Using the object literal syntax - empty object */
let obj2 = {};
/* Using the object literal syntax - with properties */
let obj3 = { 'key1': 'value1', 'key2': 'value2', 'key3' : 'value1'};

let student1 = new Object();
student1.name = 'foo';
student1.course = 'B.E';
student1.age = 19;
console.log('Student1 name = '+ student1.name);

// Another way to access member of js object
console.log('Retrieving Student1 name = '+ student1['name'] + ' using [] operator');

let student2 = {         
    name: 'bar',
    course: 'B.tech',
    age: 19      
};

// Deleting Property
delete student2.age;


// Phrase as key in JS object
let mobile = {         // an object
    name: "BlackBerry",  // property
    color: "black",
    'latest price': 40000      // phrase should enclosed with single or double quotes
};

// Comparing objects
const object1 = {
    name: "hello"
}
  
const object2 = {
    name: "hello"
}
  
console.log(object1 == object2);  // false
console.log(object1 === object2);  // false
console.log(object1 === object1);  // true
  



// 3. regex object
let re = /hello/; // case sensitive
// test if regular exp 're' matches 'str'. Returns true or false
console.log('check if regex found', re.test('Hello')); 

let re2 = /hello/i; // case insensitive
// test if regular exp 're' matches 'str'. Returns true or false
console.log('check if regex found', re2.test('Hello')); 


// regex pattern to match valid email
let re3 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
console.log('abc@gmail.com is valid email as test gave = ' + re3.test('abc@gmail.com'));
console.log('abc@gmail.net is valid email as test gave = ' + re3.test('abc@gmail.net'));
console.log('abc@gov.in is valid email as test gave = ' + re3.test('abc@gov.in'));
console.log('abc.com is not valid email as test gave = ' + re3.test('abc.com'));


/*
Things to ponder:
1. What is the difference b/w objects and map in JS?


*/

/* Things to try:
1. Replace all occurrence of a string having 'bangalore' to 'bengaluru'

*/


