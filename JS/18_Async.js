/*
Ref: http://latentflip.com/loupe/

What does Async mean ?
"Async is not concurrency"

Why we need asynchronous behavior?
For performance, better user experience


How to have async behavior?
    JS is single threaded, async behavior is supported via web-api's like
    xhr request(fetch), setTimeout

    So what is an web-API? 
    API which is doesn't exist in JS rather offered by the browser
    
*/

// callback function (Recap)
function foo(callbackFunc) {
    console.log('Foo called');
    callbackFunc();
}
function bar() {
    console.log('bar called');
}
foo(bar);

// Promises : Better callback function
    /*
        3-States of promise:
            1. Pending (On creation)
            2. Fulfilled
            3. Rejected

    */
let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed

    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
});

// syntax: promiseObject.then(onFulfilled, onRejected);
promise.then(
    function(result) { /* handle a successful result */ },
    function(error) { /* handle an error */ }
);

// alternate to above
// syntax: promiseObject.catch(onRejected);
promise.then(
    function(result) { /* handle a successful result */ }
).catch (
    function(error) { /* handle an error */ }
).finally (
    // do something eventually
)



const validURL = 'https://api.github.com/users';

function getPromise(URL) {
    let promise = new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        req.open("GET", URL);
        req.onload = function () {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject("There is an Error!");
            }
        };
        req.send();
    });
    return promise;
}


let promise = getPromise(validURL);
promise.then(
    (result) => {
        console.log({result}); 
    },
    (error) => {
        // As the URL is a valid one, this will not be called.
        console.log('We have encountered an Error!', error); 
});

const invalidURL = 'https://api.github.com/user/foo';
let p2 = getPromise(invalidURL);

p2.then(function(value) {
    console.log(value); // "Success!"
    throw new Error('oh, no!');
  }).catch(function(e) {
    console.error(e.message); // "oh, no!"
  }).then(function(){
    console.log('after a catch the chain is restored');
  }, function () {
    console.log('Not fired due to the catch');
  });

// alternate way to handle promise rejection
p2.catch(error => console.log(error));

p2.finally(()=> {
    console.log('Do something say try with diff website');
});

    /*
    Promise chain: When one promise satifies, do another thing 
    asynchronously
    */
    new Promise(function(resolve, reject) {
        setTimeout(() => resolve(1), 1000); // (*)
      
      }).then(function(result) { // (**)
        alert(result); // 1
        return result * 2;
      }).then(function(result) { // (***)
        alert(result); // 2
        return result * 2;
      }).then(function(result) {
        alert(result); // 4
        return result * 2;
    });

    /*
    Here the flow is:

        The initial promise resolves in 1 second (*),
        Then the .then handler is called (**), which in turn creates a new promise (resolved with 2 value).
        The next then (***) gets the result of the previous one, processes it (doubles) and passes it to the next handler.
        …and so on.
        As the result is passed along the chain of handlers, we can see a sequence of alert calls: 1 → 2 → 4.


    */

    // Another way to do the same
    new Promise(function(resolve, reject) {
        setTimeout(() => resolve(1), 1000);    
    }).then(function(result) {
        alert(result); // 1
        return new Promise((resolve, reject) => { // (*)
            setTimeout(() => resolve(result * 2), 0);
        });
        
    }).then(function(result) { // (**)
        alert(result); // 2
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 0);
    });
        
    }).then(function(result) {
        alert(result); // 4
    });
            

// async & await : Cleaner promises(better way to deal with promise chaining)

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => { alert('Resolving');resolve("done!")}, 1000)
    });

    alert('Starting');
    let result = await promise; // wait until the promise resolves (*)

    alert(result); // "done!"
}

f();


/*
The function execution “pauses” at the line (*) and resumes when the 
promise settles, with result becoming its result. So the code above 
shows “done!” in one second.

    Output:
        Starting
        Resolving
        Done!

*/


async function bar() {
    try {
      let response = await fetch('http://invalid-url');
    } catch(err) {
      alert(err); // TypeError: failed to fetch
    }
}
  
bar();


async function baz() {
    try {
        let response = await getPromise(validURL);
    } catch(err) {
        alert(err); // TypeError: failed to fetch
    }
}
baz();