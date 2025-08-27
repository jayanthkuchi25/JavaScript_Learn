//  operand1 ? operand2 : operand3;

/*
operand1 is the expression that is to be evaluated. If the value of the expression is 
true, operand2 gets executed. If the value of the expression is false, operand3 gets 
executed. You can read the question mark as "then" and the colon as "else" here:
*/

// expression ? statement for true : statement associated with false;


/*
 The template for saying it in your head should be: 
if *operand1*, then *operand2*, else *operand3*
*/

let age = 17;
let message = (age < 18) ? "Access denied - you are too young!" : "Access granted - you are old enough!";
console.log(message); // Access denied - you are too young!