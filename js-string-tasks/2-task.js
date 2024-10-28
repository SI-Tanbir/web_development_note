// Count how many times a string has the letter a or A



const myString = "Ariana Grande";
const matches = myString.match(/a/gi);  
const count = matches ? matches.length : 0;

console.log(count);  
