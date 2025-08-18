/* Variables are the first building block you will be introduced to when learning most 
languages. Variables are values in your code that can represent different values each 
time the code runs. Here is an example of two variables in a script:
*/
firstname = "Jayanth";
x=2;
console.log(firstname);
console.log(x);

//And they can be assigned a new value while the code is running

firstname = "Kuchi";
x=7;

/*Without variables, a piece of code would do the exact same thing every single time 
it was run. Even though that could still be helpful in some cases, it can be made 
much more powerful by working with variables to allow our code to do something 
different every time we run it.
*/

//Explanation for above paragraph:

/*🔹 Without variables

If you don’t use variables, your code always uses fixed values.
That means the result will be the same every single time you run it.
*/

console.log(5+3);
//output: 8

/*
Here, 5 and 3 are fixed numbers.

No matter how many times you run this, the output will always be 8.

This makes the code rigid — it cannot adapt to different inputs or situations.
*/

/*

🔹 With variables

When you use variables, you store values in them.
This allows your code to work with different inputs each time, making it much more flexible.
*/ 

x = 5;
y = 3;
console.log(x+y);
//output: 8

/*
Here, x and y are variables.
If you change the values of x and y, the result will also change.
*/

/*
🔹 Why variables make code powerful

Variables allow your code to:

Reuse logic with different values (no need to rewrite the whole code).

Take input from users (e.g., forms, prompts, API data).

Store results temporarily and use them later.

Change behavior dynamically depending on conditions.
*/

//Example with user input:
let userAge = prompt("Enter your age:");
console.log("Your age is: " + userAge);

//if you type 20 as age, it prints your age is : 20
////if you type 10 as age, it prints your age is : 10

