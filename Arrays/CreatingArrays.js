/*
 Arrays are lists of values. These values can be of all data types and one array can 
even contain different data types. It is often very useful to store multiple values 
inside one variable
*/

//Creating arrays

arr1 = new Array(1,2,3,4,5);
/*
This uses the Array constructor.
It works, but can sometimes cause unexpected behavior.
*/
arr2 = [1,2,3,4,5]; // This is the perfect way of creating an array.

arr3 = new Array(10); // This will create an array with 10 empty slots, not an array with the number 10 int it.
arr4 = [10]; // This will create an array with the number 10 in it.

console.log(arr3); //output: [ <10 empty items> ].
console.log(arr4); //output: [10].

arr5 = new Array("5"); // This will create an array with value "5" in it.
console.log(arr5); //output: ["5"].

let arr = ["black", "orange", "pink"];
console.log(arr); // ["black", "orange", "pink"]


// How new Array() works
/*
The behavior of new Array() depends on what arguments you pass:
    1. If you pass multiple values → it creates an array with those values.
*/
new Array(1, 2, 3); // [1, 2, 3]
/*
    2. If you pass a single non-number → it creates an array with that element.
*/
new Array("3"); // ["3"]
/*
    3. If you pass a single number → it creates an empty array with that length (not with that number as a value).
*/
new Array(3); // [ <3 empty items> ]
/*
    4. If you pass no arguments -> it creates an empty array.
*/
new Array(); // [].


//Why new Array(3) creates empty slots
let arr1 = new Array(3);
/*
JavaScript sees a single numeric argument.
It interprets it as: “Make an array with a length of 3 but don’t put anything inside yet.”
This results in an array with 3 empty slots (also called "holes").
*/
console.log(arr1.length); // 3
console.log(arr1);        // [ <3 empty items> ]


// Note: These aren’t undefined values. They are truly empty slots.

let arr5 = new Array(3);
let arr2 = [undefined, undefined, undefined];

console.log(arr5); // [ <3 empty items> ]
console.log(arr2); // [undefined, undefined, undefined]

console.log(arr5[0]); // undefined (but slot doesn't exist yet)
console.log(arr2[0]); // undefined (but slot actually exists)

/*
🔹 Why did JavaScript designers do this?

Because it’s a shortcut for preallocating arrays when you know the size in advance.
*/

let arr7 = new Array(5); // reserve space for 5 items
for (let i = 0; i < arr7.length; i++) {
  arr7[i] = i * 2;
}
console.log(arr7); // [0, 2, 4, 6, 8]

/*
As I already mentioned, we can have mixed arrays and arrays can hold any type of 
variable. The values of the array won't be converted to a single data type or anything 
like that. JavaScript simply stores all the variables with their own data type and 
value in the array:
*/
let mixedArr = ["hi there", 5, true];
console.log(typeof mixedArr[0]);
console.log(typeof mixedArr[1]);
console.log(typeof mixedArr[2]);

 //output:
/*
string
number
boolean
*/

/*
The last array fun fact we will go over here is what happens if you define an array 
using const. You can change the values of a constant array, but you cannot change 
the array itself. Here is a piece of code to demonstrate
*/

const arr9 = ["hi there"];
 arr9[0] = "new value";
 console.log(arr9[0]);
 
arr9 = ["nope, now you are overwriting the array"];

/*
 The new value for the first element of the array is going fine, but you cannot assign 
a new value to the full array. Here is what it will output
*/

//output:
/*
 new value
 TypeError: Assignment to constant variable.
*/