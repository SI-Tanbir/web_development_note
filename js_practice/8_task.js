const fruits = ['apple', 'banana', 'orange'];

// Try to map these fruits into objects with properties:
// 1. name (the fruit name in uppercase)
// 2. length (the length of the fruit name)
// 3. firstLetter (first letter of the fruit)

// Your solution should look like this:



const fruitObjects = fruits.map(fruit => ({
        name: fruit.toUpperCase(),
        length: fruit.length,
        firstLetter: fruit[0]
    }));
    
    
    console.log(fruitObjects)