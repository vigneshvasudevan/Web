export function sayHi(user) {
    console.log('Hello ', user);
}

// Define a module "myModule" with two dependencies, jQuery and Lodash
define("myModule", ["jquery", "lodash"], function($, _) {
    var foo = {};

    var privateVar = "Nothing outside of this module can see me";

    var privateFn = function(param) {
        return "Here's what you said: " + param;
    };

    foo.version = 1;

    foo.moduleMethod = function() {
        // We can still access global variables from here, but it's better
        // if we use the passed ones
        return privateFn(windowTitle);
    };

    return foo;
});

//Modules can also skip the name and be anonymous. When that's done, they're usually loaded by file name.
define(["jquery", "lodash"], function($, _) { /* factory */ });

//They can also skip dependencies:
define(function() { /* factory */ });

//Some AMD loaders support defining modules as plain objects:
define("myModule", { version: 1, value: "sample string" });