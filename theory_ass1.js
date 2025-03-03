// String Methods in JavaScript

let str = " Hello, JavaScript! ";

console.log("Original String:", str);
console.log("Length:", str.length);
console.log("Trim:", str.trim());
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Replace 'JavaScript' with 'JS':", str.replace("JavaScript", "JS"));
console.log("Repeat:", str.repeat(2));
console.log("Concat:", str.concat(" is fun!"));
console.log("Pad Start:", str.padStart(25, '*'));
console.log("Pad End:", str.padEnd(25, '*'));
console.log("Trim Start:", str.trimStart());
console.log("Trim End:", str.trimEnd());
console.log("Character at index 7:", str.charAt(7));
console.log("Index of 'JavaScript':", str.indexOf("JavaScript"));
console.log("Last index of 'o':", str.lastIndexOf("o"));
console.log("Includes 'Java':", str.includes("Java"));
console.log("Starts with ' Hello':", str.startsWith(" Hello"));
console.log("Ends with '! ':", str.endsWith("! "));
console.log("Slice (7, 17):", str.slice(7, 17));
console.log("Substring (7, 17):", str.substring(7, 17));
console.log("Substr (7, 10) (deprecated):", str.substr(7, 10));
console.log("Split by space:", str.split(" "));

console.log("\n=============================");

// Array Methods in JavaScript

let arr = ["Apple", "Banana", "Mango", "Orange"];

console.log("Original Array:", arr);
arr.push("Grapes");
console.log("Push 'Grapes':", arr);
arr.pop();
console.log("Pop last element:", arr);
arr.shift();
console.log("Shift (remove first element):", arr);
arr.unshift("Pineapple");
console.log("Unshift 'Pineapple':", arr);
arr.splice(2, 0, "Kiwi");
console.log("Splice (insert 'Kiwi' at index 2):", arr);
arr.splice(1, 2);
console.log("Splice (remove 2 elements from index 1):", arr);

let numArr = [5, 3, 9, 1, 6];
console.log("\nOriginal Number Array:", numArr);
numArr.sort();
console.log("Sort alphabetically:", numArr);
numArr.sort((a, b) => a - b);
console.log("Sort numerically:", numArr);
numArr.reverse();
console.log("Reverse array:", numArr);

console.log("\nArray Searching & Filtering:");
console.log("Includes 'Mango':", arr.includes("Mango"));
console.log("Index of 'Mango':", arr.indexOf("Mango"));
console.log("Find first fruit starting with 'O':", arr.find(fruit => fruit.startsWith("O")));
console.log("Find index of fruit starting with 'O':", arr.findIndex(fruit => fruit.startsWith("O")));
console.log("Filter numbers greater than 4:", numArr.filter(num => num > 4));

console.log("\nMapping & Reducing:");
let newArr = arr.map(fruit => fruit.toUpperCase());
console.log("Map (convert to uppercase):", newArr);
let sum = numArr.reduce((total, num) => total + num, 0);
console.log("Reduce (sum of numbers):", sum);

console.log("\nCombining & Splitting:");
let newArray = arr.concat(["Strawberry", "Peach"]);
console.log("Concat new array:", newArray);
console.log("Join with ' - ':", newArray.join(" - "));
