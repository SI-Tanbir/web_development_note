// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

let str = "the quick brown fox jump over the lazy dogs";

// Create an array of vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Check if each vowel is present in the string
const containsAllVowels = vowels.every(vowel => str.toLowerCase().includes(vowel));

console.log(containsAllVowels);  // Output: true
