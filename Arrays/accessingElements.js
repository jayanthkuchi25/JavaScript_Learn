// When you create an array:

let cars = ["Toyota", "Renault", "Volkswagen"];

// JavaScript automatically gives each element a numeric index:
/*
"Toyota"      → index 0
"Renault"     → index 1
"Volkswagen"  → index 2
*/
//Indexing in JavaScript always starts at 0, not 1.

// 🔹 Accessing Elements

//You use square brackets [ ] with the index number:

console.log(cars[0]); // Toyota
console.log(cars[1]); // Renault
console.log(cars[2]); // Volkswagen


// 🔹 What happens with invalid indexes?

// Case 1: Index too large
console.log(cars[3]);
// Output: undefined (no error, just returns undefined because in JavaScript, arrays can be sparse)

// when we say "arrays in javaScript can be sparse", it means:
/*
An array does not need to have a value at every index between 0 and length - 1.
There can be empty slots (sometimes called holes) in it.

This is different from many other languages (like Java or C++), where arrays are always dense (every slot has a value).
*/

let arr = [];
arr[0] = "a";
arr[3] = "d";

console.log(arr);       // [ 'a', <2 empty items>, 'd' ]
console.log(arr.length); // 4

/*
🔎 Explanation:

We set arr[0] = "a" and arr[3] = "d".

Indexes 1 and 2 were never assigned, so they are empty slots.

The array still reports length = 4 (because the last defined index is 3), even though only 2 values exist.
*/

let arr = [1, , 3];  
console.log(arr.length);  // 3  
console.log(arr[1]);      // undefined  
console.log(1 in arr);    // false (no element actually exists at index 1)

// Iteration methods behave differently:

let arr = [1, , 3];

arr.forEach(v => console.log(v));  
// logs: 1, 3   (skips the empty slot)

console.log(arr.map(v => v * 2));  
// [2, , 6]   (hole is preserved)

console.log(Object.keys(arr));  
// ['0', '2']   (index 1 doesn’t exist!)

// Case 2: Negative index
console.log(cars[-1]);
/*
👉 Output: undefined
Why?

JavaScript does not support negative indexing (unlike Python).

So cars[-1] is not a valid index → undefined.
*/

//Fun fact: If you explicitly assign a value to a negative index:

cars[-1] = "BMW";
console.log(cars[-1]); // BMW

/*
This works, but it doesn’t go into the array — it becomes a property of the object (arrays in JS are special kinds of objects). The actual array length doesn’t change.
*/
/*
🔹 Summary

Valid index (0, 1, 2, …) → returns the element.

Out-of-range index → returns undefined.

Negative index → also undefined (unless you manually assign it).

No error is thrown — JS just gives undefined.
*/

