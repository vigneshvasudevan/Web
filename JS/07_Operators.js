/* Operators
What is an operator?
Operators allow us to perform some operation

Type of operators:

1. Arithemetic
    + for addition
    - for subtraction
    / for division
    * for multiplication
    ** for exponent
    % for modullo

2. Bitwise operators
    ~ NOT
    & AND
    | OR
    ^ XOR
    >> Right shift
    << Left shift
    
3. Logical operators
    && 
    ||
    !
    
    == equality
    = assignment
    > greater than
    >= greater than or equal to
    < lesser than
    <= lesser than or equal to
    != Not equal to
    
4. Unary operators
    ++ Increase by one
    -- decrease by one
    += add to itself
    -= subtract from itself
    *= multiply it by the factor
    /= divide it by the factor

5. Special operators
    typeof to get the type of variable or constant
    === to check type and equality, aka strict equal
    !== to check type and non-equality, aka strict non-equal


*/

let x = 10;
x++; // x will be 11
x += 10; // x will be 11+10 = 21
x *= 2; // x will be 21*2 = 42 

console.log("hello" === "hello");   // true
console.log("3" === 3);             // false
console.log(true === 1);            // false
console.log(null === undefined);    // false
