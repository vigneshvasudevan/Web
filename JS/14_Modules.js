/* Modules:

Background: As our application grows bigger, we want to split it into multiple files, 
so called “modules”. A module may contain a class or a library of functions for a 
specific purpose. For a long time, JavaScript existed without a language-level module 
syntax. That wasn’t a problem, because initially scripts were small and simple, 
so there was no need. But eventually scripts became more and more complex, so the 
community invented a variety of ways to organize code into modules, special libraries 
to load modules on demand.

To name some (for historical reasons):

AMD – one of the most ancient module systems, initially implemented by the library require.js.
CommonJS – the module system created for Node.js server.
UMD – one more module system, suggested as a universal one, compatible with AMD and CommonJS.
Webpack 


What is a module:
A module is just a file. One script is one module. As simple as that.
Modules can load each other and use special directives export and import to interchange 
functionality, call functions of one module from another one

    1. 'export' keyword labels variables and functions that should be accessible from 
    outside the current module.
    2. 'import' allows the import of functionality from other modules.

*/

import {sayHi} from './14_Modules2';

console.log(sayHi); // function...
sayHi('Foo'); // Hello, Foo!


/* Here
The import directive loads the module by path ./13_Module2.js relative to the current file, 
and assigns exported function sayHi to the corresponding variable.


Note: 
    1. Modules work only via HTTP(s), not locally
    If you try to open a web-page locally, via file:// protocol, you’ll find that 
    import/export directives don’t work. Use a local web-server, such as static-server 
    or use the “live server” capability of your editor, such as VS Code Live Server Extension
    to test modules.

    2. Module always work with "strict"

    3. <script type="module"> to create module script in html
*/