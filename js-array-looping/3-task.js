// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'




var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

let word='';

for(const num of numbers){
    word=word+num;
}

console.log(word)