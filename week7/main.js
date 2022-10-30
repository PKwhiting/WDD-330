/*
- Functions have built-in properties such as length, but you can add custom properties.
- All functions have call() and apply() methods that can be used to call the function, whose values ​​are bound to objects provided as arguments.
- Immediately Invoked Function Expressions (IIFE) are functions enclosed in parentheses, immediately followed by double curly braces to call them. These are useful for naming variables and setting default values.
- Functions can be dynamically redefined in the function body depending on certain conditions.
- A recursive function calls itself until a certain condition is met.
- A callback is a function provided as an argument to another function.
- Callbacks are often used in asynchronous programming as part of an event loop. This means that the program can continue execution in a single thread while waiting for another task to complete.
- Promises can be used instead of callbacks to handle multiple asynchronous actions one after the other. It also provides a better error handling mechanism.
- Functions that return other functions are called higher-order functions.
- A closure is the act of leaving a reference to a variable available outside the scope of the function in which it was originally defined.
- Placing an asterisk (*) after a function keyword creates a generator.
- A generator function returns an iterator object that provides a next() method that returns the next value in the sequence defined by the generator function.
- Ajax is a technique for sending and receiving data asynchronously in the background.
- Data can be sent in a variety of formats, but is typically JSON.
- Ajax allows partial page updates without reloading the entire page.
- Can communicate with external APIs using Ajax.
- You can use the Fetch API to make Ajax requests.
- The Response interface allows you to control the response received from a request or create your own Response object.
<form id='todo' action='https://jsonplaceholder.typicode.com/todos' method='POST'>
    <input type='text' name='task'  placeholder='Add Task' autofocus required>
    <button type='submit'>Add Task</button>
- The Request interface allows you to create a Request object containing information about the request made. B. URLs and headers.
- The Headers interface allows you to create HTTP headers that can be added to request or response objects.
- Requests can retrieve data with a GET request or send data with a POST request.
- The FormData interface facilitates submitting data from forms.
fetch(request)
.then( response => response.json() )
.then( data => console.log(`${data.title} saved with an id of ${data.id}`) )
.catch( error => console.log('There was an error:', error))

}
- Ajax uses XHTML for content, CSS for presentation, and the Document Object Model and JavaScript for displaying dynamic content.
- Traditional web applications use synchronous requests to transfer information to and from servers. This means that when you fill out the form and click submit, you are redirected to a new page with new information from the server.
- How does ajax form submission work?
- How does AJAX interact with jquery?
- When you click Submit with AJAX, JavaScript sends a request to the server, interprets the result, and updates the current screen. In a pure sense, the user has no idea that anything has been sent to the server.
*/