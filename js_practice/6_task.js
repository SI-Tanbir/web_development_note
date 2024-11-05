// write an arrow function it will do the following :
// it will take two array inputs;
// combined  two arrays and assign them in a new array;
// find the maximum Number from the new array and return the result

// print the result

const findMaxFromCombinedArrays = (arr1, arr2) => {
    // Combine the two arrays
    const combinedArray = [...arr1, ...arr2];
    // Find the maximum number in the combined array
    const maxNumber = Math.max(...combinedArray);
    return maxNumber;
};


// Example usage
const array1 = [1, 5, 9];
const array2 = [3, 7, 10, 2];
const result = findMaxFromCombinedArrays(array1, array2);

console.log("The maximum number is:", result);
