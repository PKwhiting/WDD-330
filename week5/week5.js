/*
CHAPTER 10: TESTING AND DEBUGGING
- Bugs in code are inevitable and best discovered sooner or later.
- The string "use strict" can be used to set JavaScript to strict mode. This can be used for the entire file or for a single function.
- Linting tools can be used to ensure that your code adheres to best practices and conventions.
- Function detection allows you to check if a method is supported before calling it, thus avoiding throwing exceptions.
- You can interactively explore and debug your code using the console and your browser's built-in debugging tools.
- The throw statement can throw exceptions.
- An error object is created when an exception occurs.
- Code placed in a try block passes all error objects to the catch block when an exception occurs. All code inside the finally block is executed regardless of whether an exception is raised.
- Test-driven development is the practice of writing tests that fail, writing code that passes the tests, and refactoring the code whenever new functionality is implemented.
- You can test your code using the Jest framework.
- Debugging is not easy. All modern browsers have built-in JavaScript debuggers.
- You can toggle the built-in debugger on and off to force it to report errors to the user.
- The debugger also allows you to set breakpoints (points at which code execution can be stopped) and examine variables while the code is running.
- Normally (otherwise follow the instructions at the bottom of this page) enable debugging in your browser by pressing F12 and selecting Console from the debugger menu.
- EvalError is obsolete in the current ECMAScript specification and is retained only for backward compatibility. This was used to identify bugs when using the global eval() function.
- A RangeError is raised if the number is outside the allowed range.
- Referencing a non-existing element throws a ReferenceError. For example: calling an undefined function.
- A SyntaxError is thrown if there is an error in the syntax of the code.
- TypeError is thrown when there is an error in the types of values ​​used. For example, if a number is expected, a string is used.
- A URIError is thrown if there is a problem encoding or decoding the URI.
- InternalError is a non-standard error thrown when an error occurs in the JavaScript engine. A common cause for this is too much recursion.
- What are the best use cases for Jest? 
- What are the things the debugger keyword can't detect?
- Can debugging work across multiple JS framework files?
*/