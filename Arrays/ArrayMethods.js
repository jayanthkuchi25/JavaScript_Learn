// Adding and replacing elements 
    // We can add elements with the push() method:
    favoriteFruits = ["grapefruit", "orange", "lemon"];
    favoriteFruits.push("mango"); // adds mango to the end of the array.
    console.log(favoriteFruits);

    // we can also add elements with the unshift() method:
    // It adds one or more elements to the beginning of an array and returns the new length of the array.
    //syntax array.unshift(element1, element2, ..., elementN);
let fruits = ["apple", "banana"];
let newLength = fruits.unshift("mango");

console.log(fruits);     // ["mango", "apple", "banana"]
console.log(newLength);  // 3
    // We can replace elements by accessing the index and assigning a new value:
    fruits[1] = "kiwi"; // replaces the second element (index 1) with "kiwi"
    console.log(fruits); // Output: ["mango", "kiwi", "banana"]

    // We can also use the splice() method to add or replace elements at a specific index:
    // syntax array.splice(start, deleteCount, item1, item2, ..., itemN);
    // start: The index at which to start changing the array.
    // deleteCount: The number of elements to remove from the array.
    // item1, item2, ..., itemN: The elements to add to the array, starting from the start index.
    fruits.splice(2, 1, "pear", "peach"); // at index 2, remove 1 element and add "pear" and "peach"
    console.log(fruits); // Output: ["mango", "kiwi", "pear", "peach"]

    // 1. Remove elements
    let fruits = ["apple", "banana", "mango", "orange"];
    fruits.splice(1, 2); // start at index 1, remove 2 elements

    console.log(fruits); // ["apple", "orange"]

    // 2. Add elements
    let numbers = [1, 2, 5];
    numbers.splice(2, 0, 3, 4); // at index 2, remove 0, add 3 and 4

    console.log(numbers); // [1, 2, 3, 4, 5]

    // 3. Replace elements
    let colors = ["red", "blue", "green"];
    colors.splice(1, 1, "yellow"); // remove 1 at index 1, add "yellow"

    console.log(colors); // ["red", "yellow", "green"]


