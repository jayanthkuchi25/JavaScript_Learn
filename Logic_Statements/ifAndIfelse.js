/*
We can make decisions in our code using if and if else statements. It is very much 
like this template: 
if *some condition is true*, then *a certain action will happen*, else *another action will 
happen* 
*/

/*
For example, if it is raining then, I will take my umbrella, else I will leave my 
umbrella at home. It is not that much different in code
*/

let rain = true;
if(rain){
 console.log("** Taking my umbrella when I need to go outside **");
} else {
 console.log("** I can leave my umbrella at home **");
}

/*
 In this case, the value of rain is true. And therefore, it will log to the console:
 ** Taking my umbrella when I need to go outside **
*/

/*
Here is another example. If the age is below 18, log to the console that access is 
denied, otherwise log to the console that the person is allowed to come in:
*/


 if(age < 18) {
  console.log("We're very sorry, but you can't get in under 18");
 } else {
  console.log("Welcome!");
 }