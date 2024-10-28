// Count how many times a string has the letter a



const myString = "Ariana Grande";
const matches = myString.match(/a/g);  
const count = matches ? matches.length : 0;

console.log(count);  // Output: 3
