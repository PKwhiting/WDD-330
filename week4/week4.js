/*
CHAPTER 8: FORMS
- Forms are the primary method of entering data into the browser.
- Forms have different controls that are used to enter different types of information.
- HTML5 has a number of new input types that are being implemented in modern browsers.
- document.forms returns an HTML collection of all forms on the page.
- form.elements returns an HTML collection of all the elements contained in the form.
- Forms have focus, blur, and change events that occur when the user interacts with the form.
- Forms also have a submit event that you can use to intercept before the form is submitted.
- Information entered in a form can be read or updated using the Value property of form controls.
- You can use the HTML5 Form Validation API to validate forms automatically, but it's only available at a basic level, so you may need a custom validation script.
Are there certain modules that allow for faster form validation instead of having to hard code it?
How do you stop TEXTAREA from being completely customizable in size and messing up all the website design?

CHAPTER 12: OBJ PROGRAMMING
- Object-oriented programming (OOP) is a programming style that uses objects that encapsulate their own properties and methods.
- The main concepts of OOP are encapsulation, polymorphism and inheritance.
- You can use the constructor function to create an instance of an object.
- ES6 introduced class declaration using the class keyword. These can be used in place of the constructor functions.
- Within a constructor function or class declaration, the this keyword refers to the object returned by the function.
- All instances of a class or constructor function inherit all properties and methods of its prototype.
- Prototypes are live, so new properties and methods can be added to existing instances.
- The prototype chain is used to find available methods. If the object doesn't have a method, JavaScript checks to see if its prototype has a method. If not, look through that function's prototype until a method is found or an object constructor function is reached.
- You can create private properties and methods by defining variables with const and defining functions within the constructor function. These can be exposed using getter and setter functions.
- Monkey patching is the process of extending the prototype of a built-in object to add methods. This should be done with care, as it can lead to unexpected behavior in the behavior of built-in objects.
Mixin methods allow you to add properties and methods from other objects without creating an inheritance chain.
- If you return a reference to a method, you can chain the methods to call them in sequence.
- Polymorphism allows objects to override shared methods with more specific implementations.
- The value of this is not preserved in nested functions, which can lead to errors. This can be avoided with that = this using the method bind(this) and an arrow function.
- Methods can be borrowed from other objects.
- Inheritance composition is a design pattern in which objects are made up of "brick" objects instead of inheriting all properties and methods from a parent class.
Is it possible to assign an anonymous function to a variable and pass it as an argument to another function?
Best use cases for Prototype keyword?
How do you use mixins to extend objects?

CHAPTER 15: MODULAR JS
- Modules are self-contained pieces of code that provide functions and methods that can be used in other files and other modules.
- ES6 added support for modules, allowing code to be abstracted into its own standalone file and imported in another.
- The MVC pattern is used to organize code into different sections responsible for different elements of the application.
- Template files can be used to separate rendering code from JavaScript. You can also generate markup with dynamic code and programming logic.
- React and Vue.js are popular JavaScript view libraries for rendering components and tracking their status.
- Minification removes all extra characters from code to reduce file size.
How do you build custom modules and then use them in seperate JS files?
*/