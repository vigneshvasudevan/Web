/*

These global properties return a simple value. 
They have no properties or methods.

    1. Infinity
    2. NaN
    3. undefined
    4. globalThis

*/

// Infinity:
const maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
  console.log('Let\'s call it Infinity!');
}

console.log(Infinity          ); /* Infinity */
console.log(Infinity + 1      ); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)       ); /* -Infinity */
console.log(1 / Infinity      ); /* 0 */
console.log(1 / 0             ); /* Infinity */


// NaN (Not a number)
function sanitise(x) {
    if (isNaN(x)) {
      return NaN;
    }
    return x;
}
  
console.log(sanitise('100'));
console.log(sanitise('NotANumber'));



// Globalthis
// globalThis property contains the global this value
  