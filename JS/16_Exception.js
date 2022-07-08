/*
What is an exception: Errors detected during execution are called exceptions 
and are not unconditionally fatal.

divide by zero is a classical example for exceptions


How to handle exception: Gracefully handle errorneous scenarios instead
of run-time errors


Syntax:
    try{  
        expression;  // say divide a number by another number
    }
    catch(error){  
        expression; // code for handling the error.  
    } finally {
        expression; //Executable code  
    }

*/


try {
    let foo = {
        name: "Alice",
    };
    foo.bar()
  } catch (e) {
    if (e instanceof EvalError) {
      console.error(e.name + ': ' + e.message)
    } else if (e instanceof RangeError) {
      console.error(e.name + ': ' + e.message)
    } else {
      console.log(e.toString());
    }
}

//Understanding - Finally
openMyFile();
try {
  writeMyFile(theData);
} catch(e) {
  console.log('Something went wrong while writing to a file');
} finally {
  closeMyFile(); // always close the file doesn't matter if things went wrong
}

// Custom exception
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}

function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo] !== undefined) {
      return months[mo];
    } else {
      throw new UserException('Invalid Month');
    }
}
  
let monthName;
  
try {
  const myMonth = 15; 
  monthName = getMonthName(myMonth);
} catch (e) {
  monthName = 'unknown';
  console.error(e.message, e.name); // pass exception object to err handler
}
  



/*
Things to try:

1. Validate email address & throw a custom exception if required

*/