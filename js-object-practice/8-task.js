function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    
    return count;
}

// Test cases
console.log(countVowels("hello world"));  // Output: 3
console.log(countVowels("OpenAI"));       // Output: 3
console.log(countVowels("sky"));          // Output: 0
