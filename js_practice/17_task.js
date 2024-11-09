const numbers = [1, 2, 3, 4, 5];

// Using arrow function syntax and array methods:
// 1. Filter out all odd numbers
// 2. Multiply each remaining number by 2
// 3. Sum up all the results

// Write a chain of array methods to accomplish this in one line

const result = numbers
    .filter(num => num % 2 === 0)  // keeps even numbers
    .map(num => num * 2)           // multiplies each by 2
    .reduce((sum, num) => sum + num, 0);  // sums all numbers