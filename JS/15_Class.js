/*

What is a Class?
Classes are a template or blueprint for creating objects. They encapsulate data with code to work on that data. 

Why do we need class?
Class is the basic element of Object oriented paradigm


Class vs Modules:
Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.


*/

// Creating objects
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    }
};

person.age;
person.bio();



// Adding property on the fly to object
const object1 = {};
Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});


// Factory to produce more person
function createPerson(firstName, lastName) {
    const obj = {};
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.introduceSelf = function() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    }
    return obj;
  }
  
let person = createPerson('Bob', 'Smith');


// Objects using 'New'
class Rectangle {
    // Constructor : A special method for creating and initializing an object 
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
let obj = new Rectangle(100, 200); // Instantiating class 'Rectangle'

/* Note here:

    1. Another way object 
    let obj = Object.create(Rectangle);


    2. What happens when user calls 'new'
        1. An empty object {} is created 
        2. 'this' would be set to this empty object. By default 'this' is pointing to 'window' and hence this is needed
        3. using functionname.call method, the function actually gets called 
            const obj = Rectangle.call({}, 100, 200);
        4. returns 'this' object. this is an implicit return.

    3. Class isn't hoisted unlike functions and var
        const p = new Rectangle(); // ReferenceError
        class Rectangle {}
            
*/


// Class like expression, more like anonymous class
let rect = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(rect.name);// output: "rect"

// named class
let rect2 = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(rect2.name); // output: "Rectangle2"


// Class with public members
class Rectangle {
    height = 0; // No need of var/let/const
    width;
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}

class Rectangle {
    #height = 0; // # means private field
    #width;

    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }

    /**
     * @param {number} val
     */
    set height(val) {
        if (val > 20) {
            this.#height = val;
        } else {
            this.#height = 20;
        }
    }

    get height() {
        return this.#height;
    }
    // private Method
    #calcArea() {
      return this.#height * this.#width;
    }
}
const square = new Rectangle(10, 10);
console.log(square.area); // calling 'area' as variable instead of function
square.height = 10;
console.log(square.height); // 20
console.log(square.width); // undefined


// Static keyword
class MyClass {
    static staticProperty = 'someValue';
    static staticMethod() {
        return 'static method has been called.';
    }
}
  
// Unlike class variable or functions, static functions/variables can be accessed
// by class itself, no need to instantiate class
console.log(MyClass.staticProperty);// output: "someValue"
console.log(MyClass.staticMethod());// output: "static method has been called."
  


/* Strict mode: Introduced in ECMAScript 5, is a way to opt in to a restricted variant of JavaScript

1. Eliminates some JavaScript silent errors by changing them to throw errors.
2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
3. Prohibits some syntax likely to be defined in future versions of ECMAScript.


The body of a class is executed in strict mode, i.e., code written here is subject to 
stricter syntax for increased performance, some otherwise silent errors will be thrown,
and certain keywords are reserved for future versions of ECMAScript.

*/


/* Class vs Modules in JS:

Classes and Modules were added to ES6. 
Classes were introduced as a way to expand on prototype-based inheritance by adding some object oriented concepts. 
Modules were introduced as a way to organize multiple code files in JavaScript and expand on code reusability and scoping among files.

*/




/* Inheritance:

    1. Prototypes are the mechanism by which JavaScript objects inherit features from 
    one another.

    2. Every object in JavaScript has a built-in property, which is called its prototype. 
    The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. 
    The chain ends when we reach a prototype that has null for its own prototype.


    3. The property of an object that points to its prototype is not called prototype.
    Its name is not standard, but in practice all browsers use __proto__. 
    The standard way to access an object's prototype is the Object.getPrototypeOf() method.

    4. When you try to access a property of an object:
    if the property can't be found in the object itself, the prototype is searched for the property.

*/

const myObject = {
    city: 'Bangalore',
    greetings() {
      console.log(`Greetings from ${this.city}`);
    }
}
myObject.greetings(); // Greetings from Bangalore
Object.getPrototypeOf(myObject); 

/* myObject will have 

    __defineGetter__
    __defineSetter__
    __lookupGetter__
    __lookupSetter__
    __proto__
    city
    constructor
    greetings
    hasOwnProperty
    isPrototypeOf
    propertyIsEnumerable
    toLocaleString
    toString
    toValueOf
  

*/

const myDate = new Date(2022, 07, 04);
console.log(myDate.getYear()); // 2022
console.log(Object.hasOwn(myDate, 'getYear')); // false
myDate.getYear = function() {
    console.log(`I'm hijacked`)
};
// below statement shadows existing getYear()
myDate.getYear(); // 'I'm hijacked'
console.log(Object.hasOwn(myDate, 'getYear'));  // true



class Person {
    name;
    constructor(name) {
      this.name = name;
    }
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  
  }

class Professor extends Person {
    teaches;
    constructor(name, teaches) {
      super(name); //class parent constructor
      this.teaches = teaches;
    }
  
    introduceSelf() {
      console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }
  
    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
    }
  
}
  

/* Mixin : In JavaScript we can only inherit from a single object. There can be only one [[Prototype]] for an object. 
And a class may extend only one other class.

*/

let sayHiMixin = {
    sayHi() {
      alert(`Hello ${this.name}`);
    },
    sayBye() {
      alert(`Bye ${this.name}`);
    }
};
  
// usage:
class User extends Person{
    constructor(name) {
        this.name = name;
    }
}
  
// copy the methods
Object.assign(User.prototype, sayHiMixin);
// now User can say hi
new User("Dude").sayHi(); // Hello Dude!


/*
Things to try:

    1. Identify the classes for a college, few obvious ones are
        student, course, subject, professor, Non-Teaching Staffs, etc..
    2. Define relationship among those items
    3. Define the property inside those classes
    4. Implement the class

*/