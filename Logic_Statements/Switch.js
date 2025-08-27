/*
If else statements are great for evaluating Boolean conditions. There are many things 
you can do with them, but in some cases, it is better to replace them with a switch 
statement. This is especially the case when evaluating more than four or five values.
*/

/*
The syntax for a switch statement is as follows:
*/

 switch(expression) {
  case value1:
    // code to be executed
    break;
  case value2:
    // code to be executed
    break;
  case value-n:
    // code to be executed
    break;
 }

// example
let hobby = "dancing";
switch(hobby) { // the expression to be evaluated
    case "coding": // if hobby is "coding"        
        console.log("** I love coding too! **");
        break; // break out of the switch statement
    case "singing": // if hobby is "singing"
        console.log("** Can you teach me that? **");
        break; // break out of the switch statement
    case "dancing": // if hobby is "dancing"
        console.log("** Wow! That's my favorite too! **");
        break; // break out of the switch statement
    default: // if hobby is none of the above       
        console.log("** That sounds interesting! Tell me more! **");
        break; // break out of the switch statement
}

/* 🔎 Explanation   :
1. The switch statement evaluates the expression (in this case, the value of hobby).
2. It then compares the value of the expression to each case value (e.g., " coding", "singing", "dancing").
3. If a match is found, the corresponding block of code is executed (e.g., console.log("** I love coding too! **")).        
4. The break statement is used to exit the switch statement once a match is found and the code is executed. This prevents the execution of subsequent cases.
5. If no match is found, the code in the default case is executed (e.g  console.log("** That sounds interesting! Tell me more! **")).
*/

/* Note:
1. The break statement is optional, but it is generally a good practice to include it to
    prevent fall-through behavior (where multiple cases are executed).  
2. The default case is also optional, but it is useful for handling unexpected values.
3. Switch statements are often used when you have a variable that can take on multiple  
    discrete values, and you want to execute different code based on those values.  
4. They can make your code more readable and organized compared to using multiple if else statements.
*/
let age = 25;
let cost;       
let message;
switch(true) { // switch statement evaluating true  
    case (age < 5): // if age is less than 5
        cost = 0;
        message ="Yay! You get in for free!";
        break; // break out of the switch statement
    case (age >= 5 && age < 12): // if age is between 5 and 12
        cost = 5;
        message ="With the child discount, the fee is 5 dollars";
        break; // break out of the switch statement
    case (age >= 12 && age < 65): // if age is between 12 and 65
        cost = 10;
        message ="A regular ticket costs 10 dollars.";
        break; // break out of the switch statement
    default: // if age is 65 or older       
        cost = 7;
        message ="A ticket is 7 dollars.";
        break; // break out of the switch statement
 }
 console.log(message);
 console.log("Your Total cost "+cost);

// Note: In this example, we use switch(true) to evaluate multiple conditions based on the value of age. Each case checks a different age range, and the corresponding cost and message are set accordingly.
// This approach can be more readable than using multiple if else statements, especially when dealing with several discrete conditions.
// However, keep in mind that using switch(true) is less common than using switch with discrete values, so use it judiciously based on your specific use case.
// Also, remember that switch statements are best suited for scenarios where you have a limited number of discrete values to evaluate. For more complex conditions or ranges, if else statements may still be the better choice.

// combining case statements
let day = 3;    
let dayName;
switch(day) { // switch statement evaluating the value of day   
    case 1: // if day is 1
        dayName = "Monday";
        break; // break out of the switch statement
    case 2: // if day is 2
        dayName = "Tuesday";
        break; // break out of the switch statement
    case 3: // if day is 3
    case 4: // if day is 4
    case 5: // if day is 5
        dayName = "It's a weekday"; // same code for cases 3, 4, and 5
        break; // break out of the switch statement
    case 6: // if day is 6
    case 7: // if day is 7       
        dayName = "It's the weekend!"; // same code for cases 6 and 7
        break; // break out of the switch statement
    default: // if day is none of the above       
        dayName = "Invalid day";
        break; // break out of the switch statement
 }
 console.log(dayName); // Output: It's a weekday

// Note: In this example, cases 3, 4, and 5 all execute the same code block, setting dayName to "It's a weekday". Similarly, cases 6 and 7 set dayName to "It's the weekend!". This approach helps to reduce redundancy and makes the code more concise when multiple cases should result in the same outcome.

// Note: The break statement is crucial here to prevent fall-through behavior, where the code would continue executing into subsequent cases if break were omitted. 
