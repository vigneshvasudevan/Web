/* Primitive data types in JS

1. Number (includes whole number, decimal numbers)
2. String (String is a bunch of characters, e.g name is a string)
3. Boolean (i.e. true or false)
4. undefined (Means nothing)
5. null (Means empty)

Note: Empty and nothing is logically same but their type is not same


*/

let x = 100;
console.log("type of x is", typeof(x));
x = "foo";
console.log("type of x is", typeof(x));
x = true;
console.log("type of x is", typeof(x));
x = undefined;
console.log("type of x is", typeof(x));
x = null;
console.log("type of x is", typeof(x));
// Type of null will be undefined for legacy reasons


// Strings: 

let txt = 'foo';
// String is iterable
console.log(txt.charAt(2));
console.log(typeof txt.charAt(2));
// String are immutable; similar to string in java, hence
// txt.charAt(2) = 'x'; is illegal

// String can be declared inside double, single, back-ticks
let doubleQuotedString = "text";
let singleQuotedString = 'text';
let backTickString =`This is a 
string using back ticks
allows to create multi-line strings`;

let firstName = "foo";
let lastName = "bar";
// String templates
let text = `Hi ${firstName}, ${lastName}`;

// String can be primitive and non-primitive
let str1 = 'foo';
let str2 = new String('foo');
console.log(typeof(str1)); // Logs "string"
console.log(typeof(str2));  // Logs "object"

// Note: Avoid usage of new String()
