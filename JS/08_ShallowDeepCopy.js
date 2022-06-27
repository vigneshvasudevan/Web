// Primitive type are by default deep copied
let x = 10;
let y = x;
y = 20;
console.log('x = ', x);
console.log('y = ', y);


// Shallow copy inside arrays
const arr1 = [10, 20, 30];
const arr2 = arr1;
arr2[0] = 40;
console.log('arr1 = ', arr1);
console.log('arr2 = ', arr2);


// Deep copy for non-primitive types
const arr3 = Object.assign({}, arr1); // This is not clean, we will cover post functions
arr3[1] = 50;
console.log('arr1 = ', arr1);
console.log('arr3 = ', arr3);

// Note: There are much more elegant ways to
// clone an object than Object.assign() say https://www.npmjs.com/package/lodash