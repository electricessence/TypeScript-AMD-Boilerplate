# TypeScript-AMD-Boilerplate
This sample app shows the simplest working example of using require (Asynchronous Module Definition) with TypeScript.

### Features
- The main.ts demonstrates the use of a class and how you still need to wait for DOM elements to be loaded before access.
- gulp.js (and nodejs) is used here to allow for a source and a deploy/build folder.  Not necessary for every project, but larger projects benefit from this cleaner structure.  Being able to ignore build files but keep source files is very helpful.  You could use grunt or any other task runner to trigger the typescript compiler, but gulp works very well and is easy to understand.
- External module loading is demonstrated by the use of a shim.
- bower is used to install DefinitelyTyped as well as jquery.

### How to Proceed
When using AMD style dependencies, namespaces are unnecessary and can be managed simply by grouping classes in folders.
You will see that defining folders correctly in require is very helpful at grouping your classes.
You can still write modules and consume them just as easily as you do classes but it's not a requirement.
