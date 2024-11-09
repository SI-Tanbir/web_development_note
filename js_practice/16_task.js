const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};


// Complete these lines using destructuring:

// 1. Get the city from the person object in one line
// 2. Provide a default value of 'Unknown' for a non-existent 'zipCode' property

// Write your solution here
let {address :{city,zipCode ='unknown'}} =person;

console.log(city)
