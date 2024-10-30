function deleteInvalids(array) {
    let output = []; // Defining output within the function for better scope control

    for (let i of array) {
        if (typeof i === "number" && !isNaN(i)) { // Checking if it's a number and not NaN
            output.push(i);
        }
    }

    return output; // Returning output
}

var input1 = ["1" , {num:2} , NaN ];
console.log(deleteInvalids(input1)); // This will print the valid numbers
