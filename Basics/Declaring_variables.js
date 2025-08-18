/*
 The first time you create a variable, you declare it. And you need a special word for 
that: let, var, or const. We'll discuss the use of these three arguments shortly. The 
second time you call a variable, you only use the name of the existing variable to 
assign it a new value
*/

let firstname = "Jayanth";
firstname = "kuchi";

/*
As explained in above once we declare the variable,
you can assign it a value.
you cn also change the value later in the code.
This is how you declare a variable and assign a value to it.
*/


// let, var, and const
// These are the three keywords used to declare variables in javaScript.
// They are used to create variables that can store values and be reused throughout the code.
// This makes your code more dynamic and adaptive to different situations.


let nr1 = 12;
var nr2 = 8;
const PI = 3.14;
/*
Let and var are used to declare variables that can change their value later in the program.
const is used to declare a variable that cannot be changed once assgined to a variable.
*/

/*
var has global scope and let has block scope. var's global scope means that you can 
use the variables defined with var in the entire script. On the other hand, let's block 
scope means you can only use variables defined with let in the specific block of code 
in which they were defined. Remember, a block of code will always start with { and 
end with }, which is how you can recognize them.
 On the other hand, const is used for variables that only get a value assigned once—
 for example, the value of pi, which will not change. If you try reassigning a value 
declared with const, you will get an error
*/

const someConstant = 42;
someConstant = 4; // This will throw an error because someConstant is a constant and cannot be changed
// Uncaught TypeError: Assignment to constant varibale.

//let and var can be reassigned
let someVariable = 10;
someVariable = 20; //This is fine.