//Invoking functions

/*
 nameOfTheFunction();
 functionThatTakesInput("the input", 5, true);
 */

//Function declaration
function nameOfTheFunction() {
  console.log("Hello from the function!");
}

function sayHello() {
    let you = prompt("What's your name? ");
    console.log("Hello", you + "!");
}

/*
Take a moment to consider the relationship between functions and variables. As 
you have seen, functions can contain variables, which shape how they operate. The 
opposite is also true: variables can contain functions. Still with me? Here you can 
see an example of a variable containing a function (varContainingFunction) and a 
variable inside a function (varInFunction):
*/
 let varContainingFunction = function() {
    let varInFunction = "I'm in a function.";
    console.log("hi there!", varInFunction);
 }
 varContainingFunction(); //invoking the function contained in the variable

//Naming functions
//Function names should be descriptive of what the function does. Use camelCase for multi-word names.
function calculateSum(a, b) { //parameters a and b
    return a + b; //returning the sum of a and b
}

/*
Use camelCase for your functions: this means that the first word starts with a 
lowercase letter and new words start with a capital. That makes it a lot easier 
to read and keeps your code consistent.

Make sure that the name describes what the function is doing: it's better to 
call a number addition function addNumbers than myFunc.

Use a verb to describe what the function is doing: make it an action. So 
instead of hiThere, call it sayHi.

*/
