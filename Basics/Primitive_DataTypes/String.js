/*
A string is used to store a text value. It is a sequence of characters. There are different 
ways to declare a string:
 • Double quotes
 • Single quotes
 • Backticks: special template strings in which you can use variables directly
*/

let singleString = 'jatanth';
let doubleString = "jayanth";
let templateString = `jayanth`;

/*
The main difference between single quotes and double quotes is that you can use 
single quotes as literal characters in double-quoted strings, and vice versa. If you 
declare a string with single quotes, the string will end as soon as a second quote is 
detected, even if it's in the middle of a word. So for example, the following will result 
in an error, because the string will be ended at the second single quote within let's
*/

//let funActivity = 'let's learn JavaScript';
// This will throw an error: Uncaught SyntaxError: Invalid or unexpected token;

/*
Let will be recognized as a string, but after that, the bunch of characters that follow 
cannot be interpreted by JavaScript. However, if you declare the string using double 
quotes, it will not end the string as soon as it hits the single quote, because it is 
looking for another double quote. Therefore, this alternative will work fine
*/
let funActivity = "Let's learn JavaScript";

//let question = "Do you want to learn JavaScript? "Yes!"";

let language = "JavaScript";
 let message = `Let's learn ${language}`;
 console.log(message);