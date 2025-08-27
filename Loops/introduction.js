//  These are the different loops we will be discussing in this chapter:
/*  1. for loop
    2. while loop    
    3. do...while loop
    4. for...in loop
    5. for...of loop
*/

// 1. for loop
/*  A for loop is used to repeat a block of code a specific number of times. It consists of three main parts: initialization, condition, and increment/decrement.
    Syntax: for (initialization; condition; increment/decrement) {
                // code to be executed  
            }
*/
for (let i = 0; i < 5; i++) { // initialization: let i = 0; condition: i < 5; increment: i++
    console.log("Iteration number: " + i);  
}
// Output: Iteration number: 0, 1, 2, 3, 4  
// The loop runs 5 times, printing the iteration number each time.
// Note: The loop stops when the condition (i < 5) is no longer true.
// You can also use a decrementing for loop:
for (let i = 5; i > 0; i--) { // initialization: let i = 5; condition: i > 0; decrement: i--
    console.log("Countdown: " + i);
}
// Output: Countdown: 5, 4, 3, 2, 1
// The loop runs 5 times, counting down from 5 to 1.
// Note: The loop stops when the condition (i > 0) is no longer true.



// 2. while loop
/*  A while loop is used to repeat a block of code as long as a specified condition is true.
    Syntax: while (condition) {
                // code to be executed  
            }       
*/
let count = 0; // initialization        
while (count < 5) { // condition
    console.log("Count is: " + count);
    count++; // increment
}
// Output: Count is: 0, 1, 2, 3, 4
// The loop runs 5 times, printing the count each time. 
// Note: The loop stops when the condition (count < 5) is no longer true.   
// You can also use a decrementing while loop:
let countdown = 5; // initialization        
while (countdown > 0) { // condition
    console.log("Countdown: " + countdown);
    countdown--; // decrement
}
// Output: Countdown: 5, 4, 3, 2, 1
// The loop runs 5 times, counting down from 5 to 1.        
// Note: The loop stops when the condition (countdown > 0) is no longer true.
// Be careful with while loops to avoid infinite loops. Always ensure that the condition will eventually become false.
// Example of an infinite loop (do not run this code):
/*  let i = 0;
    while (i < 5) {
        console.log(i);
        // i is never incremented, so the condition is always true
    }   
*/
// To fix the infinite loop, make sure to increment or change the condition inside the loop:
let i = 0;          
while (i < 5) {
    console.log(i);
    i++; // increment to eventually make the condition false
}   
// Output: 0, 1, 2, 3, 4
// The loop runs 5 times, printing the value of i each time.    



// 3. do...while loop
/*  A do...while loop is similar to a while loop, but it guarantees that the    
    block of code will be executed at least once before checking the condition.
    Syntax: do {
                // code to be executed  
            } while (condition);       
*/      
let num = 0; // initialization        
do {    
    console.log("Number is: " + num);
    num++; // increment
}   
while (num < 5); // condition
// Output: Number is: 0, 1, 2, 3, 4
// The loop runs 5 times, printing the number each time.        
// Note: The loop stops when the condition (num < 5) is no longer true.
// Even if the condition is false initially, the code block will still execute once:
let x = 10; // initialization        
do {    
    console.log("X is: " + x);
    x++; // increment
}           
while (x < 5); // condition
// Output: X is: 10 
// The code block executes once, even though the condition (x < 5) is false initially.  
// The loop stops after the first iteration because the condition is false.
// Be cautious with do...while loops to avoid infinite loops. Ensure that the condition will eventually become false.
// Example of an infinite loop (do not run this code):
/*  let i = 0;
    do {
        console.log(i);
        // i is never incremented, so the condition is always true
    } while (i < 5);   
*/
// To fix the infinite loop, make sure to increment or change the condition inside the loop:
let j = 0; // initialization    

do {
    console.log(j);
    j++; // increment to eventually make the condition false
}