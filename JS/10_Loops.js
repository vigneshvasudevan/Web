/*
Why do we need loops?
Do something over and over and again. 

Syntax for loops:
    1. For

    for (intializer; LoopEndcondition; counter) {
        // code block to be executed
    }
    e.g
    for (let i = 0; i < n; i++) {
        // do something
    }

    // For any iterable object say Arrays, Strings, Maps, NodeLists etc
    for (variable of iterable) {
        // code block to be executed
    }

    // For objects
    for (key in object) {
        // code block to be executed
    }

    2. While
        - do while
        Syntax:
        do {
            // code block to be executed
        }
        while (condition);

        - simple while
        Syntax:
            while (condition) {
                // code block to be executed
            }

        Difference b/w do-while and while:
            Do-while loop is executed atleast once



*/


let x = 'hello';
for(let i = 0; i < x.length ; ++ i) {
    console.log(x[i]); 
}

let j = 0;
while (j < x.length) {
    console.log(x[i]); 
    ++i;
}

for(let i of x) {
    console.log(j); 
}

//Iterating over array
const nums = [10, 11, 12, 13, 14, 15];

for (const num of nums) {
    console.log(num);
}

//Iterating over sets
const setOfNums = new Set([10, 20, 30, 40, 10]);
for (const num of setOfNums) {
    console.log(num);
}

setOfNums.forEach (function(value) {
    console.log(value);
})

//Iterating over maps
const fruitBasket = new Map([
    ['apples', 10],
    ['bananas', 20],
    ['jackfruit', 25],
    ['guava', 25]
  ]);

for (const entry of fruitBasket.entries()) {
    console.log(entry)
}

fruitBasket.forEach (function(value, key) {
    console.log(key, value)
})


// Iterating over objects
let studentInfo = {name :  'foo', age : 18, address : `some text`};
for(let key in studentInfo) {
    console.log(key, studentInfo[key]);
}



// Break and continue
const numbers = [10, 11, 12, 13, 14, 15];
for (let i = 0; i <numbers.length; ++i) {
    if (i == 2) {
        continue; // means skip or go back
    } 
    if (i == 4) {
        break; // means stop or abort
    }
    console.log(numbers[i])
}
//Output: 10 11 13


/*
Things to try: 
    1. Find all prime numbers from 1 to 1000

*/