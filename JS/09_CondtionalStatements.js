/* Condtional statements

Why we need conditional statements:
To execute or block execution of statement(s) based
on one or more conditions

How to write conditional statements?

1. If-else

Syntax:
    if (condition1 ) {
    //  block of code to be executed if the condition is true
    } else if (condition2 && condition3) {

    } else if (condition3 || condition4) {

    } else {
        // Will be executed when none of the above
        // Condition is met
    }

2. Switch case
    switch(expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // code block
}


Note: Conditional statements can be nested. 

e.g if (condition1) {
        if(condition2) {
            // do this
        } else {
            // do that
        }
    } else {
        // do something
    }
*/

let num = Math.floor(Math.random()* 12345);
if (num % 3 == 0) {
    console.log('num = ' + num + ' and it is divisible by 3');
} else {
    console.log('num = ' + num + ' and it is not divisible by 3');
}


let a = 'a'
let b = 'b'
if (a < b) { // true
  console.log(a + ' is less than ' + b)
} else if (a > b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}

switch (new Date().getDay()) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
}





/* Thing to try:
    1. Given a year, check if it's leap year or not
*/