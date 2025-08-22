/*
The elements in an array can be overwritten. This can be done by accessing a certain 
element using the index and assigning a new value
*/
let arr = [1,2,3,4,5];
arr[0] = 10;
arr[2] = 30;
console.log(arr);

//Built-in length property of an array
console.log(arr.length);

let lastElement = arr[arr.length-1];
console.log(lastElement); // Output : 5.

 numbers = [12, 24, 36];
 numbers[5] = 48;
 console.log(numbers.length); // Output : 6 (because the last index is 5, even the Last 2 elements are empty slots).

 console.log("numbers", numbers); // Output : numbers [ 12, 24, 36, <2 empty items>, 48 ].

 /*
 Because we added an element, 48, at index 5, it also created 2 elements at index 
positions 3 and 4 containing empty values. For now, let's have a look at array 
methods and find out the right way to add to an array.
*/